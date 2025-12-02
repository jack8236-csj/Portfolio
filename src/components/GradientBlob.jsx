import React from "react";

export default function GradientBlob(){
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -left-16 -top-8 w-96 h-96 rounded-full" style={{
        background: "radial-gradient(circle at 20% 30%, rgba(34,211,238,0.08), transparent 30%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.06), transparent 30%)",
        filter: "blur(40px)"
      }} />
      <div aria-hidden className="pointer-events-none absolute right-8 top-24 w-72 h-72 rounded-full" style={{
        background: "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.06), transparent 30%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.03), transparent 30%)",
        filter: "blur(36px)"
      }} />
    </>
  );
}
