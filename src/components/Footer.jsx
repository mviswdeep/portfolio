import { FiLinkedin, FiGithub, FiMail, FiHeart } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const { name, email, linkedin, github } = portfolioData.personal;

  return (
    <footer className="border-t border-border pt-10 pb-6">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-[Outfit] text-xl font-extrabold gradient-text">VM</span>
            <p className="text-sm text-text-muted">© {new Date().getFullYear()} {name}. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            {[
              { href: linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: github, icon: FiGithub, label: "GitHub" },
              { href: `mailto:${email}`, icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-text-muted hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
