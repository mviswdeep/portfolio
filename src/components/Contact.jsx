import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
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
  const { emailJS } = portfolioData;

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState("");
  const [isDemo, setIsDemo] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    setIsDemo(false);

    if (
      !emailJS ||
      !emailJS.serviceId ||
      emailJS.serviceId === "YOUR_SERVICE_ID" ||
      !emailJS.publicKey ||
      emailJS.publicKey === "YOUR_PUBLIC_KEY"
    ) {
      // Simulate sending for demo
      setTimeout(() => {
        setStatus("success");
        setIsDemo(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
      return;
    }

    try {
      await emailjs.send(
        emailJS.serviceId,
        emailJS.templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
          to_name: portfolioData.personal.name,
        },
        emailJS.publicKey
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setErrorMsg(err?.text || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

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

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-[1000px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Column: Contact Info */}
          <motion.div className="lg:col-span-5 flex flex-col gap-6" variants={slideUp}>
            <div className="text-left mb-2">
              <h3 className="text-xl font-bold mb-3">Let's Talk</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I'm always open to discussing data analytics opportunities,
                collaborations, or just connecting with fellow data enthusiasts.
              </p>
            </div>

            {/* Contact details cards */}
            <div className="flex flex-col gap-4">
              <motion.a href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent hover:shadow-md cursor-pointer"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiMail /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Email</span>
                  <span className="text-sm font-medium break-all">{email}</span>
                </div>
              </motion.a>

              <motion.a href={`tel:${phone}`}
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent hover:shadow-md cursor-pointer"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiPhone /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Phone</span>
                  <span className="text-sm font-medium">{phone}</span>
                </div>
              </motion.a>

              <div
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent hover:shadow-md"
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0"><FiMapPin /></div>
                <div className="text-left">
                  <span className="block text-[0.72rem] text-text-muted uppercase tracking-wide">Location</span>
                  <span className="text-sm font-medium">{location}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-2 justify-start">
              {[
                { href: linkedin, icon: FiLinkedin, label: "LinkedIn" },
                { href: github, icon: FiGithub, label: "GitHub" },
                { href: `mailto:${email}`, icon: FiMail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a key={label} href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary transition-all duration-300 hover:text-accent hover:border-accent hover:shadow-[0_0_30px_var(--color-accent-glow)] cursor-pointer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div className="lg:col-span-7 bg-bg-card border border-border rounded-2xl p-6 md:p-8" variants={slideUp}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label htmlFor="email" className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="subject" className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.div
                    className="flex items-center gap-2 text-xs font-medium text-red-500 bg-red-500/10 border border-red-500/20 p-3 rounded-lg"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <FiAlertCircle size={15} /> {errorMsg}
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    className="flex flex-col gap-1 text-left text-xs font-medium text-accent-2 bg-accent-2-soft border border-accent-2/20 p-3.5 rounded-lg"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FiCheckCircle size={16} /> Thank you! Message sent successfully.
                    </div>
                    {isDemo && (
                      <p className="text-[10px] text-text-muted mt-1 leading-relaxed">
                        Notice: Form is running in demo mode. To receive emails, configure your EmailJS credentials in <code>portfolioData.js</code>.
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <div className="text-right">
                <motion.button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md transition-all duration-300 cursor-pointer
                    ${status === "success"
                      ? "bg-accent-2 shadow-[0_0_20px_rgba(0,212,170,0.2)]"
                      : "bg-accent hover:bg-accent-light shadow-[0_0_20px_var(--color-accent-glow)] disabled:opacity-75 disabled:cursor-not-allowed"}`}
                  whileHover={status !== "submitting" && status !== "success" ? { scale: 1.03 } : {}}
                  whileTap={status !== "submitting" && status !== "success" ? { scale: 0.97 } : {}}
                >
                  {status === "submitting" ? (
                    <>
                      <FiLoader size={16} className="animate-spin" /> Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FiCheckCircle size={16} /> Sent!
                    </>
                  ) : (
                    <>
                      Send Message <FiSend size={14} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
