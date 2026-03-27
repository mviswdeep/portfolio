import { motion } from "framer-motion";
import { FiBarChart2, FiDatabase, FiCode, FiLayers, FiCloud, FiTool } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

const iconMap = { chart: FiBarChart2, database: FiDatabase, code: FiCode, pipeline: FiLayers, cloud: FiCloud, tools: FiTool };

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const headerStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const headerFade = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18 } },
};
const cardVar = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 16, mass: 0.8 } },
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerStagger}>
          <motion.span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent px-4 py-1.5 bg-accent-soft rounded-full mb-3" variants={headerFade}>Skills</motion.span>
          <motion.h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-text-primary mb-4" variants={headerFade}>What I Work With</motion.h2>
          <motion.p className="text-base text-text-secondary max-w-[550px] mx-auto" variants={headerFade}>
            Tools and technologies I use to transform data into insights
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          {skills.map((group) => {
            const Icon = iconMap[group.icon] || FiCode;
            return (
              <motion.div key={group.category} variants={cardVar}
                className="bg-bg-card border border-border rounded-xl py-7 px-6 transition-all duration-300 cursor-default hover:border-accent hover:shadow-[0_0_30px_var(--color-accent-glow)]"
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <motion.div
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent mb-4"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon size={22} />
                </motion.div>
                <h3 className="text-base font-semibold mb-3.5">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="inline-block px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary border border-border rounded-full transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
