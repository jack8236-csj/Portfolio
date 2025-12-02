import React, { useEffect, useState } from "react";

export default function TypingAnimation({ texts = ["Android • Web • Backend • UI/UX"], speed = 45 }){
  const [i, setI] = useState(0);
  const [pos, setPos] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const txt = texts[i];
    const t = setTimeout(() => {
      if (forward) {
        if (pos < txt.length) setPos(p => p + 1);
        else setForward(false);
      } else {
        if (pos > 0) setPos(p => p - 1);
        else { setForward(true); setI((i + 1) % texts.length); }
      }
    }, forward ? speed : Math.max(20, speed / 2));
    return () => clearTimeout(t);
  }, [pos, forward, i, texts, speed]);

  return <span className="typing-caret">{texts[i].slice(0, pos)}</span>;
}
