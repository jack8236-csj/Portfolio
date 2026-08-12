import React from "react";
import { motion } from "framer-motion";

export default function ScreensGallery({ images = [] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {images.map((item, index) => (
        <motion.article
          key={item.title || index}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: index * 0.04, duration: 0.28 }}
          className="grid-card overflow-hidden p-3"
        >
          <img src={item.image} alt={item.title} className="screen-img" />
          <div className="px-2 pb-2 pt-4">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 muted">{item.caption}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
