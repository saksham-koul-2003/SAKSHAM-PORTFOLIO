import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 3 + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach((line) => {
        line.y += line.speed;
        if (line.y > canvas.height) line.y = -line.length;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.lineWidth = 3;
        ctx.stroke();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 bg-gray-950 overflow-hidden">
      {/* Background Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            {[
              {
                title: "Text to Image SaaS Platform",
                description: "Implemented a credit-based AI image generation model with secure Razorpay payment integration.",
                tech: ["React", "Express.js", "MongoDB", "Node.js", "Razorpay"],
                link: "https://imagify-frontend-55j0.onrender.com/",
              },
              {
                title: "Real-Time Chat App",
                description: "Scalable chat platform supporting real-time messaging and user presence.",
                tech: ["React.js", "MongoDB", "Socket.io", "Express.js"],
                link: "https://chat-app-ntl1.onrender.com/login",
              },
              {
                title: "Portfolio Website",
                description: "Smooth animations, responsive layouts, and interactive UI components along with a contact feature",
                tech: ["React.js", "JavaScript", "EmailJS", "TailwindCSS"],
                link: "#",
              },
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-1 hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <motion.span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};