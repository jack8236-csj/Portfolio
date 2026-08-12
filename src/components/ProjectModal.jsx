import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

export default function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;

  const secondaryDemo = project.demoButtons?.[1];

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(event) => {
        if (event.target.classList.contains("modal-backdrop")) onClose();
      }}
    >
      <motion.div
        className="modal-card"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.24 }}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog">
          <FaTimes />
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface)]">
            <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col gap-5 pr-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]">
                {project.client}
              </p>
              <h3 className="mt-3 text-3xl">{project.title}</h3>
              <p className="mt-4 text-base leading-8 muted">{project.desc}</p>
              <p className="mt-4 text-base leading-8">{project.outcome}</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {(project.tech || []).map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-sm leading-7 muted">
              {project.highlights?.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.demoButtons?.[0] && (
                <a
                  className="btn-primary"
                  href={project.demoButtons[0].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  {project.demoButtons[0].label}
                </a>
              )}

              {secondaryDemo && (
                <a
                  className="btn-secondary"
                  href={secondaryDemo.link}
                  target="_blank"
                  rel="noreferrer"
                  {...(secondaryDemo.link.toLowerCase().endsWith(".apk") ? { download: true } : {})}
                >
                  {secondaryDemo.label}
                </a>
              )}

              {project.repo && (
                <a className="btn-secondary" href={project.repo} target="_blank" rel="noreferrer">
                  <FaGithub />
                  View repository
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
