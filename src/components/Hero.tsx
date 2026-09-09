import {
    ArrowDownToLine,
    Mail,
  } from "lucide-react";
  
  import {
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";
  
  import { portfolio } from "../data/portfolio";
  
  export default function Hero() {
    return (
      <section
        id="home"
        className="relative overflow-hidden px-6 py-24 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Available for opportunities
            </div>
  
            <p className="mb-4 text-lg font-medium text-blue-400">
              Hi, I'm
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              {portfolio.name}
            </h1>
  
            <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-4xl">
              {portfolio.role}
            </h2>
  
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              {portfolio.headline}
            </p>
  
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                View My Work
              </a>
  
              <a
                href="/cv/Nader-Chargui-CV-EN.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                <ArrowDownToLine size={18} />
                Download CV
              </a>
            </div>
  
            <div className="mt-10 flex items-center gap-5">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
  
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
  
              <a
                href={`mailto:${portfolio.email}`}
                className="text-slate-400 transition hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }