import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const headerStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const headerFade = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18 } },
};
const gridStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
const cardVar = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 55, damping: 18, mass: 1 } },
};

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerStagger}>
          <motion.span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent px-4 py-1.5 bg-accent-soft rounded-full mb-3" variants={headerFade}>Projects</motion.span>
          <motion.h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-text-primary mb-4" variants={headerFade}>Featured Work</motion.h2>
          <motion.p className="text-base text-text-secondary max-w-[550px] mx-auto" variants={headerFade}>
            End-to-end data projects from ingestion to insight
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={gridStagger}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVar}
              className="bg-bg-card border border-border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_var(--color-accent-glow)]"
              whileHover={{ y: -8, scale: 1.015, transition: { type: "spring", stiffness: 250, damping: 18 } }}
            >
              <span className="text-xs text-text-muted font-medium mb-4">{project.period}</span>
              <h3 className="text-lg font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.description}</p>

              {/* Impact */}
              <div className="bg-accent-soft border-l-[3px] border-accent rounded-r-xl py-3.5 px-4 mb-5">
                <span className="block text-[0.72rem] font-bold uppercase tracking-wide text-accent mb-1.5">Impact</span>
                <p className="text-[0.82rem] text-text-secondary leading-relaxed">{project.impact}</p>
              </div>

              {/* Metrics */}
              <div className="flex gap-6 mb-5 py-4 border-t border-b border-border">
                {project.metrics.map((m, j) => (
                  <div key={j} className="flex flex-col items-center flex-1">
                    <span className="font-[Outfit] text-xl font-extrabold gradient-text">{m.value}</span>
                    <span className="text-[0.7rem] text-text-muted uppercase tracking-wide mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-[0.73rem] font-semibold rounded-full bg-bg-secondary text-text-secondary border border-border">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
