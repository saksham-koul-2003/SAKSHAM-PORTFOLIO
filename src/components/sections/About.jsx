import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "NextJs"];
  const backendSkills = ["Node.js", "AWS", "MongoDB", "Express.js"];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const boxes = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 30 + 10,
      speed: Math.random() * 2 + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      boxes.forEach((box) => {
        box.y += box.speed;
        if (box.y > canvas.height) box.y = -box.size;

        ctx.fillStyle = "rgba(59, 130, 246, 0.3)";
        ctx.fillRect(box.x, box.y, box.size, box.size);
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 bg-gray-950 overflow-hidden">
      {/* Background Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-1 transition-all"
          >
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border border-blue-500/20 bg-white/5 backdrop-blur-lg hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <motion.span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-blue-500/20 bg-white/5 backdrop-blur-lg hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <motion.span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science</strong> - Bennett University (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};