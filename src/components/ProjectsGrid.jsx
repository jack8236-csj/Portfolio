import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid({ items = [] }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  if (!items.length) return null;

  const openProject = (p) => {
    setSelected(p);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeProject = () => {
    setOpen(false);
    setTimeout(() => setSelected(null), 260);
    document.body.style.overflow = "";
  };

  // small helper: detect video file
  const isVideo = (url = "") => {
    try {
      return url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm") || url.toLowerCase().endsWith(".ogg");
    } catch {
      return false;
    }
  };

  return (
    <>
      <div className="grid gap-10">
        {items.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, type: "spring", stiffness: 160 }}
            className="glass p-6 neon-outline flex flex-col md:flex-row gap-8 items-center"
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-black/20 aspect-[4/3] max-h-[260px] flex items-center justify-center">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-cyan-300">{p.title}</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {(p.tech || []).map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-slate-200 text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3 items-center">
                {/* If project has demo buttons */}
                {p.demoButtons?.length ? (
                  <>
                    {/* First demo button handling:
                        - if it points to a video file -> normal anchor (open in new tab)
                        - otherwise -> open modal (same as earlier behaviour)
                    */}
                    {isVideo(p.demoButtons[0]?.link) ? (
                      <a
                        className="btn-accent"
                        href={p.demoButtons[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.demoButtons[0]?.label ?? "View Demo"}
                      </a>
                    ) : (
                      <button className="btn-accent clickable" onClick={() => openProject(p)}>
                        {p.demoButtons[0]?.label ?? "View Demo"}
                      </button>
                    )}

                    {/* optional secondary button (Install APK or other) */}
                    {p.demoButtons[1] && (
                      <a
                        className="btn-secondary"
                        href={p.demoButtons[1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        // if it's an apk on same domain, allow browser to download
                        {...(p.demoButtons[1].link.toLowerCase().endsWith(".apk") ? { download: true } : {})}
                      >
                        {p.demoButtons[1].label}
                      </a>
                    )}

                    {/* If project has a repo url too, show it (non-blocking) */}
                    {p.repo && (
                      <a
                        className="px-3 py-2 rounded-md border border-white/10 text-sm text-gray-300 hover:text-cyan-300"
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repo
                      </a>
                    )}
                  </>
                ) : (
                  <a
                    className="px-3 py-2 rounded-md border border-white/10 text-sm text-gray-300 hover:text-cyan-300"
                    href={p.repo ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal open={open} onClose={closeProject} project={selected} />
    </>
  );
}
