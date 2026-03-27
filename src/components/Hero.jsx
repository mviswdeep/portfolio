import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.8 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 },
  },
};

export default function Hero() {
  const { name, roles, location } = portfolioData.personal;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length)
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      else timeout = setTimeout(() => setTyping(false), 2000);
    } else {
      if (displayed.length > 0)
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      else { setRoleIndex((p) => (p + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex, roles]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-[72px] overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent opacity-15 blur-[100px] -top-[10%] -right-[10%]"
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent-2 opacity-15 blur-[100px] -bottom-[10%] -left-[10%]"
          animate={{ x: [0, -20, 30, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-accent opacity-15 blur-[100px] top-[40%] left-1/2"
          animate={{ x: [0, 15, -25, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span className="block text-base text-accent font-semibold tracking-widest uppercase mb-3" variants={fadeUp}>
            Hello, I'm
          </motion.span>

          <motion.h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold tracking-tight mb-2" variants={fadeUp}>
            {name}
          </motion.h1>

          <motion.div className="text-[clamp(1.2rem,3vw,1.8rem)] font-semibold min-h-[2.2em] mb-2" variants={fadeUp}>
            <span className="gradient-text">{displayed}</span>
            <span className="inline-block text-accent font-light ml-0.5" style={{ animation: "blink 1s step-end infinite" }}>|</span>
          </motion.div>

          <motion.p className="text-sm text-text-muted mb-8" variants={fadeUp}>{location}</motion.p>

          <motion.div className="flex gap-4 justify-center flex-wrap" variants={fadeUp}>
            <motion.button
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full bg-accent text-white shadow-[0_0_30px_var(--color-accent-glow)] hover:bg-accent-light transition-colors duration-300"
              onClick={() => scrollTo("#projects")}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View My Work <FiArrowDown />
            </motion.button>
            <motion.button
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full border-[1.5px] border-border-hover text-text-primary hover:border-accent hover:text-accent transition-all duration-300"
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FiMail /> Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="flex gap-10 justify-center mt-16 py-7 px-10 bg-bg-card border border-border rounded-2xl flex-wrap md:flex-nowrap"
          variants={scaleIn} initial="hidden" animate="visible" transition={{ delay: 1 }}
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "9M+", label: "Records Analyzed" },
            { value: "38%", label: "Query Optimization" },
            { value: "3.93", label: "GPA" },
          ].map((m, i) => (
            <motion.div className="flex flex-col items-center flex-1 min-w-[calc(50%-10px)] md:min-w-0" key={i}
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.12, type: "spring", stiffness: 80, damping: 15 }}
            >
              <span className="font-[Outfit] text-2xl font-extrabold gradient-text">{m.value}</span>
              <span className="text-xs text-text-muted uppercase tracking-wide mt-1">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 text-text-muted cursor-pointer hover:text-accent transition-colors"
        initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.8, duration: 0.6 }, y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }}
        onClick={() => scrollTo("#about")}
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
