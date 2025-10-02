import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
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
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 60;
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2.5 + 1.5,
      opacity: Math.random() * 0.4 + 0.7,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, i) => {
        // Constant fluid movement with layered wave patterns
        const time = Date.now() * 0.0006;
        const wave1X = Math.sin(time + i * 0.5) * 0.025;
        const wave1Y = Math.cos(time + i * 0.7) * 0.025;
        const wave2X = Math.sin(time * 0.7 + i * 1.3) * 0.02;
        const wave2Y = Math.cos(time * 0.7 + i * 0.9) * 0.02;
        
        particle.vx += wave1X + wave2X;
        particle.vy += wave1Y + wave2Y;

        // Calculate distance from mouse
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Mouse interaction - repel particles
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.4;
          particle.vy -= Math.sin(angle) * force * 0.4;
        }

        // Very gentle pull back to base position (allow free flowing)
        particle.vx += (particle.baseX - particle.x) * 0.002;
        particle.vy += (particle.baseY - particle.y) * 0.002;

        // Minimal damping for constant motion
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Cap maximum velocity for smooth, controlled flow
        const maxVelocity = 1.0;
        const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (currentSpeed > maxVelocity) {
          particle.vx = (particle.vx / currentSpeed) * maxVelocity;
          particle.vy = (particle.vy / currentSpeed) * maxVelocity;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Allow particles to drift in a wider range
        const distanceFromBase = Math.sqrt(
          Math.pow(particle.x - particle.baseX, 2) + 
          Math.pow(particle.y - particle.baseY, 2)
        );
        const maxDrift = 120;
        if (distanceFromBase > maxDrift) {
          const angle = Math.atan2(particle.baseY - particle.y, particle.baseX - particle.x);
          particle.x = particle.baseX - Math.cos(angle) * maxDrift;
          particle.y = particle.baseY - Math.sin(angle) * maxDrift;
        }

        // Draw particle with glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        particles.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 140) * 0.5;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
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
      style={{ opacity: 0.6 }}
    />
  );
};
