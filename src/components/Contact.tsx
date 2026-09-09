import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Let's build something great together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I'm open to Full-Stack development opportunities,
              collaborations, and interesting projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                <Mail size={20} />
                Contact Me
              </a>

              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-700 px-6 py-4 text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-slate-700 px-6 py-4 text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              <span>
                Tunisia — Open to relocation across Europe
              </span>
            </div>
          </div>
        </div>

        <footer className="pt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Nader Chargui. Built with React,
          TypeScript, and Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}