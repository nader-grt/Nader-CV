import { portfolio } from "../data/portfolio";

const skillCategories = [
  {
    title: "Frontend",
    skills: portfolio.skills.frontend,
  },
  {
    title: "Backend",
    skills: portfolio.skills.backend,
  },
  {
    title: "Databases",
    skills: portfolio.skills.database,
  },
  {
    title: "Cloud & DevOps",
    skills: portfolio.skills.devops,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Technologies I work with
          </h2>

          <p className="mt-5 text-slate-400">
            A combination of frontend, backend, database and infrastructure
            technologies used to build complete applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7"
            >
              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}