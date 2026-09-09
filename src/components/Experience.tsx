import { Building2, Calendar } from "lucide-react";

import { portfolio } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-slate-800 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Professional journey
          </h2>
        </div>

        <div className="mt-14 space-y-10">
          {portfolio.experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-blue-400">
                    <Building2 size={17} />
                    {experience.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={16} />
                  {experience.period}
                </div>
              </div>

              <div className="mt-10 space-y-8">
                {experience.projects.map((project) => (
                  <div
                    key={project.name}
                    className="border-l-2 border-blue-500 pl-6"
                  >
                    <h4 className="font-semibold text-white">
                      {project.name}
                    </h4>

                    <ul className="mt-4 space-y-2">
                      {project.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm leading-6 text-slate-400"
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}