import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particles.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.27,
        vy: (Math.random() - 0.5) * 0.27,
        size: Math.random() * 1.5 + 1,
      }));
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, i) => {
        // Smooth, slow sinusoidal movement
        const time = Date.now() * 0.0003;
        particle.vx += Math.sin(time + i * 0.5) * 0.0144;
        particle.vy += Math.cos(time + i * 0.3) * 0.0144;

        // Subtle mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 120;

        if (distance < interactionRadius && distance > 0) {
          const force = (1 - distance / interactionRadius) * 0.15;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Gentle return to base position
        particle.vx += (particle.baseX - particle.x) * 0.0008;
        particle.vy += (particle.baseY - particle.y) * 0.0008;

        // Smooth damping
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Constrain to drift range
        const distanceFromBase = Math.sqrt(
          Math.pow(particle.x - particle.baseX, 2) + 
          Math.pow(particle.y - particle.baseY, 2)
        );
        if (distanceFromBase > 80) {
          const angle = Math.atan2(particle.baseY - particle.y, particle.baseX - particle.x);
          particle.x = particle.baseX - Math.cos(angle) * 80;
          particle.y = particle.baseY - Math.sin(angle) * 80;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 20, 255, 0.6)`;
        ctx.fill();

        // Draw connections
        particles.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 120;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(20, 20, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};
