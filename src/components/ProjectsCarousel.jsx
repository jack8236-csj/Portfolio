import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsCarousel({ items = [] }) {
  const [i, setI] = useState(0);
  if (!items.length) return null;

  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <button onClick={prev} className="px-3 py-2 rounded-md bg-black/30">Prev</button>
        <div className="flex-1">
          <motion.div key={i} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="glass p-6 rounded-2xl">
            <h4 className="text-xl font-semibold text-cyan-300 mb-2">{items[i].title}</h4>
            <p className="text-slate-300">{items[i].desc}</p>
          </motion.div>
        </div>
        <button onClick={next} className="px-3 py-2 rounded-md bg-black/30">Next</button>
      </div>
    </div>
  );
}
