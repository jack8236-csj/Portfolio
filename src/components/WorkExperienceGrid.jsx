import React from "react";
import { motion } from "framer-motion";

export default function WorkExperienceGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-10">
      {items.map((exp, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.06, type: "spring", stiffness: 160 }}
          className="glass p-6 neon-outline flex flex-col md:flex-row gap-8 items-center"
        >
          {/* LOGO */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-black/20 aspect-[4/3] max-h-[260px] flex items-center justify-center">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-cyan-300">
              {exp.company}
            </h3>

            <p className="text-slate-500 dark:text-slate-300 mt-1">
              <strong>{exp.role}</strong> • {exp.period}
            </p>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              {exp.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-slate-200 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
