import React, { useEffect, useState } from "react";

export default function TypingAnimation({ texts = [], speed = 40 }) {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!texts.length) return undefined;

    const current = texts[index];
    const delay = forward ? speed : Math.max(22, speed / 2);

    const timer = setTimeout(() => {
      if (forward) {
        if (position < current.length) {
          setPosition((value) => value + 1);
        } else {
          setForward(false);
        }
        return;
      }

      if (position > 0) {
        setPosition((value) => value - 1);
      } else {
        setForward(true);
        setIndex((value) => (value + 1) % texts.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [forward, index, position, speed, texts]);

  if (!texts.length) return null;

  return <span className="typing-caret">{texts[index].slice(0, position)}</span>;
}
