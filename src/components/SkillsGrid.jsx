import React from "react";
import { motion } from "framer-motion";

export default function SkillsGrid({ skills = [], onOpenSkill = () => {} }) {
  if (!skills.length) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <motion.button
            key={skill.id || index}
            type="button"
            onClick={() => onOpenSkill(skill)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.03, duration: 0.28 }}
            className="grid-card flex items-start gap-4 p-5 text-left"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Icon className="text-2xl" />
            </div>

            <div>
              <p className="text-base font-extrabold">{skill.name}</p>
              <p className="mt-2 text-sm leading-7 muted">{skill.desc}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
