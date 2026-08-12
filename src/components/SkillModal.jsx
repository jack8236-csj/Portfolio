import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function SkillModal({ skill, onClose }) {
  if (!skill) return null;

  const Icon = skill.Icon;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-card max-w-2xl"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.22 }}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog">
          <FaTimes />
        </button>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[26px] bg-[var(--accent-soft)] text-[var(--accent)]">
            <Icon className="text-4xl" />
          </div>

          <div className="space-y-4 pr-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]">
              Skill focus
            </p>
            <h3 className="text-3xl">{skill.name}</h3>
            <p className="text-base leading-8 muted">{skill.desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
