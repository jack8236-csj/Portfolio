import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

  const media = project.images?.[0] ?? null;
  const video = project.video ?? null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target.classList.contains("modal-backdrop")) onClose(); }}
        >
          <motion.div
            className="modal-card relative"
            initial={{ scale: 0.96, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            role="dialog"
            aria-modal="true"
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <FaTimes />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="modal-media">
                {video ? (
                  <video controls src={video} />
                ) : media ? (
                  <img src={media} alt={project.title} />
                ) : null}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {(project.tech || []).map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-cyan-900/30 text-slate-200 text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoButtons?.map((btn, i) => (
                    <a key={i} className="btn-accent" href={btn.link} target="_blank" rel="noreferrer">{btn.label}</a>
                  ))}

                  {project.repo && (
                    <a className="px-3 py-2 rounded-md border border-white/10 text-sm text-gray-300" href={project.repo} target="_blank" rel="noreferrer">Repo</a>
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
