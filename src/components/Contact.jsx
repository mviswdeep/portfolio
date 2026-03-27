import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

const headerStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const headerFade = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 60, damping: 18 } },
};
const slideUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 50, damping: 18, mass: 1 } },
};

export default function Contact() {
  const { email, phone, location, linkedin, github } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 md:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerStagger}>
          <motion.span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-accent px-4 py-1.5 bg-accent-soft rounded-full mb-3" variants={headerFade}>Contact</motion.span>
          <motion.h2 className="text-[clamp(1.8rem,4vw,2.6rem)] text-text-primary mb-4" variants={headerFade}>Get In Touch</motion.h2>
          <motion.p className="text-base text-text-secondary max-w-[550px] mx-auto" variants={headerFade}>
            Have a question or want to work together? Let's connect.
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <motion.div className="max-w-lg w-full text-center" variants={slideUp}>
            <h3 className="text-2xl font-bold mb-3">Let's Talk</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              I'm always open to discussing data analytics opportunities,
              collaborations, or just connecting with fellow data enthusiasts.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-8">
              <motion.a href={`mailto:${email}`}
                className="flex items-center gap-3.5 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiMail /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Email</span>
                  <span className="text-sm font-medium">{email}</span>
                </div>
              </motion.a>

              <motion.a href={`tel:${phone}`}
                className="flex items-center gap-3.5 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiPhone /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Phone</span>
                  <span className="text-sm font-medium">{phone}</span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-3.5 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiMapPin /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Location</span>
                  <span className="text-sm font-medium">{location}</span>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 justify-center">
              {[
                { href: linkedin, icon: FiLinkedin, label: "LinkedIn" },
                { href: github, icon: FiGithub, label: "GitHub" },
                { href: `mailto:${email}`, icon: FiMail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a key={label} href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary transition-all duration-300 hover:text-accent hover:border-accent hover:shadow-[0_0_30px_var(--color-accent-glow)]"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
