import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[var(--line)] bg-[var(--panel)] px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]">
              Career note
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 muted">
              Open to software development roles where mobile, web, backend, and UI decisions meet
              real operational needs. The current focus is building clearer products with practical
              execution and steady attention to user workflows.
            </p>
          </div>

          <div className="text-sm font-semibold muted">
            <p>&copy; {new Date().getFullYear()} Chung Shi Jie</p>
            <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
