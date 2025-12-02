import React from "react";
import { motion } from "framer-motion";

export default function ScreensGallery({ images = [] }){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} 
          className="glass p-3 rounded-2xl">
          <img src={img} alt={`screen-${i}`} className="screen-img rounded-xl" />
        </motion.div>
      ))}
    </div>
  );
}
