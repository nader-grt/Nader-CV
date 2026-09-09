import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolio } from "../data/portfolio";





export default function Projects() {
  const project = portfolio.featuredProject;

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Featured Project
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Real-world architecture and business logic
            </h2>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            View Repository
            <ArrowUpRight size={18} />
          </a>
        </div>

        <article className="mt-14 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">


              <span className="text-sm text-blue-400">
                GitHub Project
              </span>
            </div>

            <h3 className="mt-6 text-4xl font-bold text-white">
              {project.name}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <p className="text-sm text-slate-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
            >
             
              Explore the Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}