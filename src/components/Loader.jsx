import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }){
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 900);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="loader-wrap">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, loop: Infinity }} className="p-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#021026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.div>
    </div>
  );
}
