import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid({ items = [] }) {
  const [selected, setSelected] = useState(null);

  if (!items.length) return null;

  const openProject = (project) => {
    setSelected(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="grid gap-6">
        {items.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.07, duration: 0.35 }}
            className="grid-card grid gap-6 overflow-hidden p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6"
          >
            <button
              type="button"
              onClick={() => openProject(project)}
              className="group relative overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface)] text-left"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-full min-h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
                  {project.client}
                </p>
                <p className="mt-2 text-lg font-semibold">{project.title}</p>
              </div>
            </button>

            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold muted">
                  <span>{project.year}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--text-soft)]" />
                  <span>{project.client}</span>
                </div>

                <div>
                  <h3 className="text-3xl">{project.title}</h3>
                  <p className="mt-3 text-base leading-8 muted">{project.desc}</p>
                  <p className="mt-3 text-base leading-8 text-[var(--text-main)]">
                    {project.outcome}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 text-sm leading-7 muted">
                  {project.highlights.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-primary" onClick={() => openProject(project)}>
                  Open case overview
                </button>
                {project.demoButtons[0] && (
                  <a
                    className="btn-secondary"
                    href={project.demoButtons[0].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    {project.demoButtons[0].label}
                  </a>
                )}
                {project.repo && (
                  <a className="btn-secondary" href={project.repo} target="_blank" rel="noreferrer">
                    <FaGithub />
                    Repository
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal open project={selected} onClose={closeProject} />}
      </AnimatePresence>
    </>
  );
}
