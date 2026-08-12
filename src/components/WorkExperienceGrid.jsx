import React from "react";
import { motion } from "framer-motion";

export default function WorkExperienceGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-5">
      {items.map((item, index) => (
        <motion.article
          key={item.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ delay: index * 0.06, duration: 0.3 }}
          className="grid-card grid gap-5 p-5 lg:grid-cols-[220px_1fr]"
        >
          <div className="flex items-center justify-center rounded-[22px] border border-[var(--line)] bg-[var(--panel-strong)] p-6">
            <img src={item.logo} alt={item.company} className="max-h-24 w-full object-contain" />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-3xl">{item.company}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {item.role}
                </p>
              </div>
              <p className="text-sm font-semibold muted">{item.period}</p>
            </div>

            <p className="text-base leading-8 muted">{item.desc}</p>

            <div className="flex flex-wrap gap-2.5">
              {item.tech.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
