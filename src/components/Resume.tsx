import {
    Download,
    ExternalLink,
    FileText,
  } from "lucide-react";
  
  const resumes = [
    {
      language: "English",
      description: "Full-Stack Developer CV in English",
      file: "/cv/Nader-Chargui-CV-EN.pdf",
      flag: "🇬🇧",
    },
  
    {
      language: "Français",
      description: "CV Développeur Full-Stack en français",
      file: "/cv/Nader-Chargui-CV-FR.pdf",
      flag: "🇫🇷",
    },
  ];
  
  export default function Resume() {
    return (
      <section
        id="resume"
        className="border-y border-slate-800 bg-slate-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Resume
            </p>
  
            <h2 className="mt-4 text-4xl font-bold text-white">
              View or download my CV
            </h2>
  
            <p className="mt-5 text-slate-400">
              Choose your preferred language to view or download my
              professional resume.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {resumes.map((resume) => (
              <article
                key={resume.language}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">
                      {resume.flag}
                    </div>
  
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {resume.language}
                      </h3>
  
                      <p className="mt-1 text-sm text-slate-400">
                        {resume.description}
                      </p>
                    </div>
                  </div>
  
                  <FileText className="text-blue-400" />
                </div>
  
                <div className="mt-8 flex gap-3">
                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm text-slate-200 hover:border-blue-500"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
  
                  <a
                    href={resume.file}
                    download
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }