import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null;

  const Icon = skill.Icon;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-card relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-xl bg-gradient-to-br from-[--accent-cyan] to-[--accent-purple] text-white shadow-lg">
            <Icon className="text-4xl" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[--accent-cyan]">{skill.name}</h3>
            <p className="mt-3 text-slate-200">{skill.desc}</p>

            {skill.links && skill.links.length > 0 && (
              <div className="mt-4 flex gap-3">
                {skill.links.map((ln, idx) => (
                  <a key={idx} href={ln.href} target="_blank" rel="noreferrer" className="btn-accent">
                    {ln.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
