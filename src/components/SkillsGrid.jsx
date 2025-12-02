import React from "react";
import { motion } from "framer-motion";

/**
 * Props:
 *  - skills: array of { id, name, Icon, short, desc }
 *  - onOpenSkill: (skill) => void
 */
export default function SkillsGrid({ skills = [], onOpenSkill = () => {} }) {
  if (!skills.length) return null;

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
      {skills.map((s, i) => {
        const Icon = s.Icon;
        return (
          <motion.button
            key={s.id || i}
            onClick={() => onOpenSkill(s)}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative group focus:outline-none"
            aria-label={s.name}
            title={s.name}
          >
            {/* Rounded tile */}
            <div
              className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl glass neon-outline
                         transition-shadow duration-200 cursor-pointer"
              // keyboard accessible
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") onOpenSkill(s); }}
            >
              <Icon className="text-3xl md:text-4xl text-[--accent-cyan]" />
            </div>

            {/* Tooltip */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -bottom-10 pointer-events-none opacity-0 group-hover:opacity-100
                         transition-opacity duration-150 bg-black/70 text-white text-xs rounded-md px-2 py-1"
              style={{ transformOrigin: "center" }}
            >
              {s.name}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
