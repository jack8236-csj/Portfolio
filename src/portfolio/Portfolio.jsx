import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
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
import jmcImg from "../assets/JMC-logo.png";

/* icons */
import {
  SiKotlin,
  SiTypescript,
  SiFirebase,
  SiGooglemaps,
  SiPython,
  SiFlask,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiAndroid
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  // ================================================
  // FEATURED PROJECTS
  // ================================================
  const projects = [
    {
      title: "Sales Performance Tracker — Huachang Growmax (FYP)",
      desc:
        "Android app (Kotlin + Firebase + TypeScript) — order logging, product management, performance tracking, GPS attendance, role-based dashboards, PDF/Excel export and Google Sign-In Authentication.",
      images: [trackpointImg],
      tech: ["Kotlin", "TypeScript", "Firebase", "Google Maps"],
      demoButtons: [
        {
          label: "Introduction Video",
          link: "/videos/Sales Performance Tracker- Introduction Video.mp4"
        },
        {
          label: "Install APK",
          link: "/downloads/TrackPointFYP.apk"
        }
      ],
      repo: "https://github.com/RobertLllllee/HuaChang" // <-- ADD YOUR ACTUAL REPO LINK HERE
    },

    {
      title: "SplashAquatics — Online Fish Store",
      desc:
        "Online e-commerce website built with Flask and MySQL Workbench. Includes catalog, authentication, seller dashboard and responsive UI.",
      images: [homeImg],
      tech: ["Flask", "MySQL", "HTML/CSS", "JavaScript"],
      demoButtons: [],
      repo: "https://github.com/RobertLllllee/SplashAquatics" // optional but recommended
    }
  ];

  // ================================================
  // SKILLS
  // ================================================
  const skills = [
    { id: "kotlin", name: "Kotlin", Icon: SiKotlin, desc: "Primary Android app language." },
    { id: "typescript", name: "TypeScript", Icon: SiTypescript, desc: "Typed JavaScript for safer codebases." },
    { id: "firebase", name: "Firebase", Icon: SiFirebase, desc: "Auth, Firestore, Storage & Cloud Functions." },
    { id: "maps", name: "Google Maps API", Icon: SiGooglemaps, desc: "Location tracking & geofencing." },
    { id: "python", name: "Python", Icon: SiPython, desc: "Scripting and Flask API development." },
    { id: "flask", name: "Flask", Icon: SiFlask, desc: "Backend API for SplashAquatics." },
    { id: "mysql", name: "MySQL", Icon: SiMysql, desc: "Relational database for academic projects." },
    { id: "htmlcss", name: "HTML / CSS", Icon: SiHtml5, desc: "Front-end structure and styling." },
    { id: "javascript", name: "JavaScript", Icon: SiJavascript, desc: "Frontend interaction logic." },
    { id: "java", name: "Java", Icon: FaJava, desc: "OOP foundations & early Android experience." },
    { id: "cpp", name: "C++", Icon: SiCplusplus, desc: "Algorithms, DS&A, performance understanding." },
    { id: "git", name: "Git & GitHub", Icon: SiGithub, desc: "Version control & collaboration workflow." },
    { id: "figma", name: "Figma", Icon: SiFigma, desc: "UI/UX prototyping & design systems." },
    { id: "mongodb", name: "MongoDB", Icon: SiMongodb, desc: "NoSQL database modeling." },
    { id: "vscode", name: "VS Code", Icon: FaCode, desc: "Primary development editor." },
    { id: "android", name: "Android Studio", Icon: SiAndroid, desc: "Android development IDE." }
  ];

  // ================================================
  // WORK EXPERIENCE
  // ================================================
  const experience = [
    {
      company: "JMC Fleet Management Sdn Bhd",
      role: "Fullstack Developer Intern",
      period: "Jan 2023 – Mar 2023",
      logo: jmcImg,
      desc:
        "Refined UI for attendance, dashboard and sales report pages. Developed PHP backend functions including attendance location tracking and email notification automation.",
      tech: ["PHP", "phpMyAdmin", "HTML", "CSS"]
    }
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <div className="min-h-screen">
        <Navbar />

        <main className="pt-6">
          <HeroSection />

          {/* PROJECTS */}
          <section id="projects" className="max-w-6xl mx-auto px-6 mt-14">
            <h2 className="text-3xl font-semibold kicker mb-6">Featured Projects</h2>
            <ProjectsGrid items={projects} />
          </section>

          {/* SKILLS */}
          <section id="skills" className="max-w-6xl mx-auto px-6 mt-14">
            <h2 className="text-3xl font-semibold kicker mb-6">Technical Skills</h2>
            <SkillsGrid skills={skills} onOpenSkill={(s) => setActiveSkill(s)} />
          </section>

          {/* APPLICATION SCREENS */}
          <section id="screens" className="max-w-6xl mx-auto px-6 mt-14">
            <h2 className="text-3xl font-semibold kicker mb-6">Application Screenshots</h2>
            <ScreensGallery
              images={[
                loginImg,
                dashboardImg,
                ordersImg,
                performanceImg,
                attendanceImg,
                locationImg
              ]}
            />
          </section>

          {/* WORK EXPERIENCE */}
          <section id="experience" className="max-w-6xl mx-auto px-6 mt-20 mb-20">
            <h2 className="text-3xl font-semibold kicker mb-6">Work Experience</h2>
            <WorkExperienceGrid items={experience} />
          </section>
        </main>

        {/* SKILL MODAL */}
        {activeSkill && (
          <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
        )}

        <Footer />
      </div>
    </>
  );
}
