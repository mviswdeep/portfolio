import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

const headerStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const headerFade = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18 } },
};
const timelineStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } } };
const cardVar = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.9 } },
};
const dotVar = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 } },
};
const lineVar = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerStagger}>
          <motion.span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent px-4 py-1.5 bg-accent-soft rounded-full mb-3" variants={headerFade}>Experience</motion.span>
          <motion.h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-text-primary mb-4" variants={headerFade}>Where I've Worked</motion.h2>
          <motion.p className="text-base text-text-secondary max-w-[550px] mx-auto" variants={headerFade}>
            My professional journey in data analytics and engineering
          </motion.p>
        </motion.div>

        <motion.div className="relative pl-10 md:pl-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={timelineStagger}>
          {/* Timeline line */}
          <motion.div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-2 origin-top rounded-full" variants={lineVar} />

          {experience.map((exp) => (
            <motion.div className="relative mb-8 last:mb-0" key={exp.id} variants={cardVar}>
              {/* Dot */}
              <motion.div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-bg-primary border-[3px] border-accent z-10 transition-all duration-300 hover:bg-accent hover:shadow-[0_0_16px_var(--color-accent-glow)]" variants={dotVar} />

              <motion.div
                className="bg-bg-card border border-border rounded-xl p-7 transition-all duration-300 hover:border-border-hover hover:shadow-lg"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="flex justify-between items-start gap-3 mb-3 flex-col sm:flex-row">
                  <div>
                    <h3 className="text-base font-bold">{exp.title}</h3>
                    <p className="text-sm text-accent font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-accent-soft text-accent whitespace-nowrap">{exp.type}</span>
                </div>

                <div className="flex gap-5 text-xs text-text-muted mb-4">
                  <span className="flex items-center gap-1"><FiBriefcase size={13} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={13} /> {exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="relative pl-4 text-sm text-text-secondary leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-accent">
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
