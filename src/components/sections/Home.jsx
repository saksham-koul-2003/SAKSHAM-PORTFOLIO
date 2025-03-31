import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(173, 216, 230, 0.5)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -150, 150, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [200, -200, 0, 200],
            y: [-100, 100, -100, -50],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Saksham Koul
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="relative overflow-hidden bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              <span className="absolute inset-0 bg-blue-700 opacity-0 transition-opacity duration-300 hover:opacity-30"></span>
              View Projects
            </a>

            <a
              href="#contact"
              className="relative border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              <span className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
              Contact Me
            </a>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};