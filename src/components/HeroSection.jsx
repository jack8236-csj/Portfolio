import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import TypingAnimation from "./TypingAnimation";

const metrics = [
  { value: "2", label: "Internships completed" },
  { value: "4", label: "Core areas across Android, web, backend, and UI/UX" },
  { value: "2025", label: "Final-year product focused on field-sales operations" }
];

const strengths = [
  "Builds practical interfaces for attendance, reporting, dashboards, and sales workflows.",
  "Connects UI decisions with backend services, databases, Firebase, and location logic.",
  "Brings internship exposure from CIBC Technology and JMC Fleet Management."
];

export default function HeroSection() {
  return (
    <section className="section-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(184,77,47,0.18), transparent 28%), radial-gradient(circle at 90% 10%, rgba(110,84,57,0.18), transparent 24%)"
        }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <span className="eyebrow">Software developer portfolio</span>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <h1 className="max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              A developer who turns operational problems into usable products.
            </h1>
            <p className="max-w-3xl text-lg leading-8 muted sm:text-xl">
              Chung Shi Jie builds across Android, web, backend, and UI/UX, with hands-on
              experience in Kotlin, Firebase, Flask, MySQL, Vue, Quasar, and .NET API integration.
              His work is strongest where real workflows need clearer screens, reliable data, and
              practical execution.
            </p>
          </Motion.div>

          <div className="pill w-fit">
            <TypingAnimation
              texts={[
                "Android field-sales workflows, dashboards, and attendance tools.",
                "Kotlin, Firebase, Flask, MySQL, Vue, Quasar, and Figma.",
                "Product thinking backed by implementation and internship experience."
              ]}
              speed={34}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              Review selected work
              <FaArrowRight />
            </a>
            <a className="btn-secondary" href="mailto:jackchung10@gmail.com">
              <FaEnvelope />
              Contact candidate
            </a>
            <a className="btn-secondary" href="#skills">
              Review capabilities
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((item) => (
              <div key={item.label} className="metric-card">
                <p className="metric-value font-semibold">{item.value}</p>
                <p className="mt-2 text-sm leading-6 muted">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="metric-card">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--accent)]">
              Profile readout
            </p>
            <h2 className="mt-3 text-2xl">What his background shows</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 muted">
              {strengths.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
