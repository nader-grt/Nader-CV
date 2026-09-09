import { MapPin, BriefcaseBusiness, Code2 } from "lucide-react";

import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-slate-800 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Full-Stack Developer focused on building real products.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-400">
            {portfolio.about}
          </p>

          <div className="mt-10 grid gap-4">
            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
              <BriefcaseBusiness className="text-blue-400" />

              <div>
                <p className="font-medium text-white">
                  4+ Years Experience
                </p>

                <p className="text-sm text-slate-400">
                  Professional Full-Stack Development
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
              <MapPin className="text-blue-400" />

              <div>
                <p className="font-medium text-white">
                  {portfolio.location}
                </p>

                <p className="text-sm text-slate-400">
                  {portfolio.availability}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
              <Code2 className="text-blue-400" />

              <div>
                <p className="font-medium text-white">
                  End-to-End Development
                </p>

                <p className="text-sm text-slate-400">
                  From database design to production deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}