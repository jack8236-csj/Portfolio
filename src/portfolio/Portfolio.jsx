import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsGrid from "../components/SkillsGrid";
import SkillModal from "../components/SkillModal";
import ScreensGallery from "../components/ScreensGallery";
import WorkExperienceGrid from "../components/WorkExperienceGrid";
import Footer from "../components/Footer";

import loginImg from "../assets/login.jpeg";
import locationImg from "../assets/location_tracking.jpeg";
import dashboardImg from "../assets/dashboard.jpeg";
import ordersImg from "../assets/orders.jpeg";
import performanceImg from "../assets/performance.jpeg";
import attendanceImg from "../assets/attendance.jpeg";
import homeImg from "../assets/Home.png";
import trackpointImg from "../assets/TrackPoint.png";
import cibcImg from "../assets/CIBC logo.jpg";
import jmcImg from "../assets/JMC-logo.png";

import {
  SiAndroid,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPython,
  SiTypescript
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";

const projects = [
  {
    title: "Sales Performance Tracker",
    client: "Huachang Growmax Final Year Project",
    year: "2025",
    desc:
      "A field-sales Android application built to reduce manual reporting friction. The product combines order logging, GPS attendance, performance dashboards, and export tooling inside one role-based workflow.",
    outcome:
      "The strongest part of the case study is the product thinking: one workflow, multiple user roles, and a clear attempt to connect data capture with management visibility.",
    highlights: [
      "Designed mobile flows for attendance, order capture, and manager reporting.",
      "Implemented Google Sign-In, Firebase services, and location-aware attendance.",
      "Built export-ready reporting to support operational review."
    ],
    images: [trackpointImg],
    tech: ["Kotlin", "TypeScript", "Firebase", "Google Maps"],
    demoButtons: [
      {
        label: "Watch introduction",
        link: "/videos/Sales Performance Tracker- Introduction Video.mp4"
      },
      {
        label: "Download APK",
        link: "/downloads/TrackPointFYP.apk"
      }
    ],
    repo: "https://github.com/RobertLllllee/HuaChang"
  },
  {
    title: "SplashAquatics",
    client: "E-commerce academic project",
    year: "2024",
    desc:
      "A responsive online fish store covering discovery, authentication, seller tools, and transactional flows. The interface is straightforward and business-oriented, which suits the brief.",
    outcome:
      "This project demonstrates range beyond mobile: catalog browsing, storefront hierarchy, and dashboard thinking in a web context.",
    highlights: [
      "Structured the storefront, product detail, and seller dashboard experience.",
      "Connected the interface to Flask services and MySQL-backed data.",
      "Handled responsive behavior across browsing and management views."
    ],
    images: [homeImg],
    tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    demoButtons: [],
    repo: "https://github.com/RobertLllllee/SplashAquatics"
  }
];

const skills = [
  { id: "kotlin", name: "Kotlin", Icon: SiKotlin, desc: "Primary language for Android product work and production-ready mobile flows." },
  { id: "typescript", name: "TypeScript", Icon: SiTypescript, desc: "Used for typed front-end and Firebase-related logic." },
  { id: "firebase", name: "Firebase", Icon: SiFirebase, desc: "Authentication, Firestore, storage, and backend service integration." },
  { id: "maps", name: "Google Maps API", Icon: SiGooglemaps, desc: "Location tracking, attendance validation, and geospatial UX." },
  { id: "python", name: "Python", Icon: SiPython, desc: "General development, scripting, and backend problem solving." },
  { id: "flask", name: "Flask", Icon: SiFlask, desc: "Backend services for web projects and internal data flows." },
  { id: "mysql", name: "MySQL", Icon: SiMysql, desc: "Relational modeling for commerce and reporting-oriented features." },
  { id: "htmlcss", name: "HTML / CSS", Icon: SiHtml5, desc: "Core front-end foundations with attention to layout and responsiveness." },
  { id: "css", name: "Tailored styling", Icon: SiCss3, desc: "Custom UI styling, polish, spacing, and visual system refinement." },
  { id: "javascript", name: "JavaScript", Icon: SiJavascript, desc: "Interaction logic and front-end application behavior." },
  { id: "java", name: "Java", Icon: FaJava, desc: "Solid object-oriented foundation from earlier coursework and app work." },
  { id: "cpp", name: "C++", Icon: SiCplusplus, desc: "Problem solving, algorithmic thinking, and systems-level fundamentals." },
  { id: "git", name: "GitHub", Icon: SiGithub, desc: "Version control, project collaboration, and portfolio code publishing." },
  { id: "figma", name: "Figma", Icon: SiFigma, desc: "Wireframing, interface exploration, and communication of design intent." },
  { id: "mongodb", name: "MongoDB", Icon: SiMongodb, desc: "Experience with flexible document data structures in academic work." },
  { id: "editor", name: "Developer tooling", Icon: FaCode, desc: "Comfortable with modern editors, debugging tools, and iterative workflows." },
  { id: "android", name: "Android Studio", Icon: SiAndroid, desc: "Primary IDE for shipping Android experiences." }
];

const experience = [
  {
    company: "CIBC Technology Sdn Bhd",
    role: "Software Development Intern",
    period: "December 2025 to March 2026",
    logo: cibcImg,
    desc:
      "Worked across web and mobile implementation in a professional team setting. Contributed to Vue and Quasar UI development, supported backend integration with .NET APIs, and handled data-oriented tasks that required accuracy more than flash.",
    tech: ["Vue.js", "Quasar", ".NET", "Database operations"]
  },
  {
    company: "JMC Fleet Management Sdn Bhd",
    role: "Full Stack Developer Intern",
    period: "January 2023 to March 2023",
    logo: jmcImg,
    desc:
      "Improved internal-facing attendance, dashboard, and sales-report interfaces while supporting backend PHP work. The experience shows an early bias toward solving operational problems rather than designing purely decorative pages.",
    tech: ["PHP", "HTML", "CSS", "Email automation"]
  }
];

const screenshots = [
  { image: loginImg, title: "Login", caption: "Simple authentication entry point with restrained visual noise." },
  { image: dashboardImg, title: "Dashboard", caption: "High-density reporting surface with KPI-driven hierarchy." },
  { image: ordersImg, title: "Orders", caption: "Operational list view focused on task completion and quick scanning." },
  { image: performanceImg, title: "Performance", caption: "Report page that supports comparison and sales review." },
  { image: attendanceImg, title: "Attendance", caption: "Field check-in flow connected to location logic." },
  { image: locationImg, title: "Location tracking", caption: "Map-informed workflow used for validation and oversight." }
];

const reviewPoints = [
  {
    title: "Mobile product foundation",
    body:
      "His Sales Performance Tracker project shows Android product thinking through GPS attendance, order capture, performance dashboards, role-based workflows, and export-ready reporting."
  },
  {
    title: "Full-stack learning path",
    body:
      "SplashAquatics adds web and backend range, combining a responsive storefront, authentication, seller tools, Flask services, and MySQL-backed transactional flows."
  },
  {
    title: "Professional exposure",
    body:
      "Internships at CIBC Technology and JMC Fleet Management connect his academic projects with real implementation work across Vue, Quasar, .NET APIs, PHP, dashboards, and internal tools."
  }
];

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <HeroSection />

          <section className="section-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-4">
                <span className="eyebrow">Background summary</span>
                <h2 className="section-title">Practical software work with a UI/UX point of view.</h2>
                <p className="section-copy">
                  Chung Shi Jie's background sits between implementation and interface judgment. He
                  has built mobile and web products for sales, attendance, reporting, and commerce
                  use cases, while developing the backend and database skills needed to make those
                  interfaces work beyond the screen.
                </p>
              </div>

              <div className="grid gap-4">
                {reviewPoints.map((point) => (
                  <article key={point.title} className="metric-card">
                    <h3 className="text-xl">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 muted">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="section-frame px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <span className="eyebrow">Selected work</span>
                <h2 className="section-title">Projects show workflow, data, and product delivery.</h2>
                <p className="section-copy">
                  The strongest examples are practical systems: a field-sales Android app for
                  attendance, orders, and reporting, plus an e-commerce web project with storefront
                  and seller-management flows.
                </p>
              </div>
            </div>
            <ProjectsGrid items={projects} />
          </section>

          <section id="screens" className="section-frame px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-8 space-y-3">
              <span className="eyebrow">Interface details</span>
              <h2 className="section-title">Screens focus on the workflows he has actually built.</h2>
              <p className="section-copy">
                Login, attendance, orders, dashboards, performance, and location tracking screens
                reflect the operational product areas highlighted in his resume and project work.
              </p>
            </div>
            <ScreensGallery images={screenshots} />
          </section>

          <section id="skills" className="section-frame px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-8 space-y-3">
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">Skills are presented as tools he uses to ship features.</h2>
              <p className="section-copy">
                The stack spans Android development, Firebase services, web front-end work, backend
                APIs, relational data, and UI exploration, matching the responsibilities shown in
                his projects and internships.
              </p>
            </div>
            <SkillsGrid skills={skills} onOpenSkill={setActiveSkill} />
          </section>

          <section id="experience" className="section-frame px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-8 space-y-3">
              <span className="eyebrow">Professional context</span>
              <h2 className="section-title">Internships add real team and business context.</h2>
              <p className="section-copy">
                His internship work shows exposure to production-style collaboration, internal
                systems, UI implementation, backend integration, database operations, and the
                day-to-day constraints of business software.
              </p>
            </div>
            <WorkExperienceGrid items={experience} />
          </section>
        </div>
      </main>

      {activeSkill && <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />}

      <Footer />
    </div>
  );
}
