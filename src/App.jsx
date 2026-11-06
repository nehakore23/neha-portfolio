
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiBriefcase,
  FiBookOpen,
  FiMenu,
  FiX,
  FiStar
} from "react-icons/fi";

import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    {
      title: "Backend",
      icon: FiCode,
      items: ["Java", "Spring Boot", "Hibernate", "REST APIs"]
    },
    {
      title: "Frontend",
      icon: FiGlobe,
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Database",
      icon: FiDatabase,
      items: ["MySQL", "SQL"]
    },
    {
      title: "Tools",
      icon: FiBriefcase,
      items: ["Git", "GitHub", "Postman", "VS Code", "STS"]
    }
  ];

const projects = [
  {
    number: "01",
    name: "AdoptoCare",
    type: "Pet Adoption & Care Ecosystem",
    description:
      "A role-based web application connecting pet lovers, shelters and veterinarians for adoption and pet healthcare management.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/nehakore23/AdoptoCare.git",
    live: null,
    status: "Completed"
  },
  {
    number: "02",
    name: "DriveCare",
    type: "Vehicle Service & Booking Platform",
    description:
      "A vehicle service platform where customers can manage vehicles, book services and track appointments with mechanics.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/nehakore23/DriveCare.git",
    live: null,
    status: "Currently In Development"
  }
];


  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">

        <a href="#home" className="logo">
          NK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <FiArrowUpRight />
        </a>

      </nav>

      <main>

        {/* HERO SECTION */}
        <section className="hero section" id="home">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Neha <span>Kore.</span>
            </h1>

            <h2>
              Java Developer <span>&</span> Backend Enthusiast
            </h2>

            <p className="hero-description">
              I build secure, scalable and user-friendly web applications.
              Passionate about turning ideas into meaningful digital experiences.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-button">
                Explore My Work <FiArrowUpRight />
              </a>

              <a
                href="/Neha_Kore_Resume.pdf"
                download
                className="secondary-button"
              >
                Resume <FiDownload />
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/nehakore23"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/neha-kore23/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>

              <a href="mailto:nehakore412207@gmail.com">
                <FiMail /> Email
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="glow"></div>

            <div className="profile-card">

              <div className="card-top">
                <span>✦ MY PROFILE</span>
                <span className="card-dot">● ● ●</span>
              </div>

              <div className="profile-avatar">
                N<span>K</span>
              </div>

              <h3>Neha Kore</h3>
              <p>Java Developer</p>

              <div className="profile-divider"></div>

              <div className="profile-info">
                <span>Based in</span>
                <strong>Pune, India</strong>

                <span>Education</span>
                <strong>MCA · PG-DAC</strong>

                <span>Focus</span>
                <strong>Backend Development</strong>
              </div>

              <div className="floating-star">
                <FiStar />
              </div>

            </div>

            <div className="floating-tag tag-one">
              {"< Java />"}
            </div>

            <div className="floating-tag tag-two">
              Spring Boot ✦
            </div>

          </div>

        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">

          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>A little about <span>myself.</span></h2>
          </div>

          <div className="about-grid">

            <div className="about-main">
              <h3>Turning curiosity into code.</h3>

              <p>
                I'm an MCA graduate and CDAC-certified Java Developer with
                knowledge of Java, Spring Boot, React and MySQL.
                I enjoy developing web applications, working with REST APIs
                and understanding how systems work behind the scenes.
              </p>

              <p>
                I'm a quick learner who loves exploring new technologies
                and continuously improving my development skills.
              </p>
            </div>

            <div className="about-stats">

              <div className="stat-card">
                <FiBookOpen />
                <h3>MCA</h3>
                <p>Postgraduate Education</p>
              </div>

              <div className="stat-card">
                <FiCode />
                <h3>PG-DAC</h3>
                <p>CDAC Certified</p>
              </div>

            </div>

          </div>

        </section>

        {/* SKILLS SECTION */}
        <section className="section" id="skills">

          <div className="section-heading">
            <span className="section-label">02 / MY EXPERTISE</span>
            <h2>Tools I work <span>with.</span></h2>
            <p>Technologies and tools I use to build digital solutions.</p>
          </div>

          <div className="skills-grid">

            {skills.map(({ title, icon: Icon, items }) => (

              <div className="skill-card" key={title}>

                <div className="skill-icon">
                  <Icon />
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">

          <div className="section-heading">
            <span className="section-label">03 / SELECTED WORK</span>
            <h2>Things I've <span>built.</span></h2>
            <p>A glimpse of my development projects and practical learning.</p>
          </div>

          <div className="projects-grid">

            {projects.map(project => (

              <article className="project-card" key={project.number}>

                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <FiCode />
                </div>

                <span className="project-type">
                  {project.type}
                </span>
                

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

<div className="project-links">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FiGithub /> GitHub <FiArrowUpRight />
  </a>

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Preview <FiArrowUpRight />
    </a>
  )}
</div>

<div className="project-status">
  <span className={project.status === "Completed" ? "completed" : "in-progress"}>
    ● {project.status}
  </span>
</div>


              </article>

            ))}

          </div>

        </section>

        {/* EDUCATION SECTION */}
        <section className="section" id="education">

          <div className="section-heading">
            <span className="section-label">04 / MY JOURNEY</span>
            <h2>Education & <span>learning.</span></h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <span className="timeline-year">FEB 2025 — AUG 2025</span>
              <h3>PG-DAC</h3>
              <p>
                Centre for Development of Advanced Computing (CDAC), Mumbai
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">MAR 2021 — APR 2023</span>
              <h3>Master of Computer Applications</h3>
              <p>
                ASM Institute of Business Management and Research, Pune
              </p>
              <span className="result">
                First Class with Distinction
              </span>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">MAR 2017 — APR 2020</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>
                G.H. Raisoni College, Pune
              </p>
              <span className="result">First Class</span>
            </div>

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">

          <span className="section-label">05 / GET IN TOUCH</span>

          <h2>
            Have a project or
            <br />
            opportunity in <span>mind?</span>
          </h2>

          <p>
            I'm always open to discussing new opportunities and collaborations.
          </p>

          <a
            className="primary-button"
            href="mailto:nehakore412207@gmail.com"
          >
            Say Hello <FiArrowUpRight />
          </a>

          <div className="contact-email">
            nehakore412207@gmail.com
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <a href="#home" className="logo">
          NK<span>.</span>
        </a>

        <p>Designed & built with care by Neha Kore © 2026</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
