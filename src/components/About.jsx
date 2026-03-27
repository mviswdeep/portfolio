import { motion } from "framer-motion";
import { FiMapPin, FiAward, FiBookOpen } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const headerFade = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18 } },
};
const cardSlide = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 16, mass: 0.8 } },
};

export default function About() {
  const { summary } = portfolioData.personal;
  const { education, certifications } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent px-4 py-1.5 bg-accent-soft rounded-full mb-3" variants={headerFade}>About</motion.span>
          <motion.h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-text-primary mb-4" variants={headerFade}>Who I Am</motion.h2>
          <motion.p className="text-base text-text-secondary max-w-[550px] mx-auto" variants={headerFade}>{summary}</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h3 className="flex items-center gap-2.5 text-lg text-accent mb-5" variants={headerFade}>
              <FiBookOpen /> Education
            </motion.h3>
            {education.map((edu, i) => (
              <motion.div key={i} variants={cardSlide}
                className="bg-bg-card border border-border rounded-xl p-6 mb-4 transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-sm"
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <h4 className="text-[0.95rem] font-semibold mb-1">{edu.degree}</h4>
                <p className="text-sm text-text-secondary">{edu.school}</p>
                <div className="flex justify-between mt-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1"><FiMapPin size={13} /> {edu.location}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">GPA: {edu.gpa}</span>}
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h3 className="flex items-center gap-2.5 text-lg text-accent mb-5" variants={headerFade}>
              <FiAward /> Certifications
            </motion.h3>
            {certifications.map((cert, i) => (
              <motion.div key={i} variants={cardSlide}
                className="bg-bg-card border border-border rounded-xl p-6 mb-4 flex items-center justify-between gap-4 transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-sm"
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div>
                  <h4 className="text-[0.95rem] font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-text-secondary">{cert.issuer}</p>
                </div>
                <span className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold ${cert.status === "Completed" ? "bg-accent-2-soft text-accent-2" : "bg-accent-soft text-accent"}`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
