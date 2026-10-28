import { ArrowDownRight, ArrowUpRight, Code2, GitBranch, Mail, Menu, Terminal, X } from "lucide-react";
import { useState } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",
  "MongoDB", "Git", "GitHub", "Python", "C", "Vercel"
];

// Replace these example projects with your real projects before publishing.
const projects = [
  {
    number: "01",
    name: "Python File Manager",
    type: "PYTHON · FILE HANDLING",
    description: "A small Python project exploring file operations, organization, and practical programming fundamentals.",
    tags: ["Python", "File I/O"],
    link: "https://github.com/bavxxh/File_Handling_Main",
    status: "Add your repository link"
  },
  {
    number: "02",
    name: "File Handling 2.0 (Working on it)",
    type: "PYTHON · HANDLING FILES EFFICIENTLY",
    description: "Advanced version of the file handling project.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/bavxxh/File_Handling_Main",
    status: "Replace with your project"
  },
  {
    number: "03",
    name: "More coming soon",
    type: "CURRENTLY LEARNING",
    description: "I'm learning by building, experimenting, and turning new concepts into useful projects.",
    tags: ["Learning", "Building"],
    link: "https://github.com/",
    status: "In progress"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Bavesh home">
          <span className="brand-mark">B.</span>
          <span>BAVESH<span className="brand-dot">.</span></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE TO LEARN & BUILD</div>
            <h1>Building ideas<br />into <span className="gradient-text">digital reality.</span></h1>
            <p className="hero-description">
              Hey, I'm <strong>Bavesh</strong> — a first-year Computer Science student exploring
              full-stack development and building my skills one project at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><Code2 size={15} /> CSE Student</span>
              <span className="meta-divider" />
              <span><Terminal size={15} /> Full-stack learner</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative code card">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.js</span>
                <span className="code-lock">JS</span>
              </div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">"Bavesh"</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-green">"Full-stack"</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;mindset: <span className="code-green">"Always learning"</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;build: <span className="code-purple">()</span> <span className="code-pink">=&gt;</span> <span className="code-green">"Something useful"</span></div>
                <div><span className="line-no">06</span>{"}"};</div>
                <div className="code-spacer" />
                <div><span className="line-no">07</span><span className="code-muted">// the journey starts here_</span><span className="cursor" /></div>
              </div>
              <div className="code-card-footer"><span className="footer-live" /> <span>BUILD MODE: ON</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon">{"</>"}</span><span><b>Clean code</b><small>One step at a time</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-spark">✳</span><span><b>Curious mind</b><small>Always exploring</small></span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-label"><span>01</span> / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curiosity first.<br /><span className="muted-heading">Code follows.</span></h2>
            <div className="about-copy">
              <p>
                I'm pursuing B.Tech in Computer Science and Engineering at SRM Ramapuram.
                I enjoy understanding how things work, solving problems, and turning ideas into
                practical digital experiences.
              </p>
              <p>
                I'm currently strengthening my foundations in programming and web development.
                My goal is to keep learning, build meaningful projects, and grow into a developer
                who creates things people genuinely find useful.
              </p>
              <div className="about-note"><span className="note-line" /> Currently learning, experimenting, and building.</div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-label"><span>02</span> / TOOLKIT</div>
          <div className="section-heading-row">
            <h2>Tools of the <span className="gradient-text">trade.</span></h2>
            <p>A growing toolkit for turning ideas<br className="desktop-break" /> into working experiences.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill} style={{ "--delay": `${index * 45}ms` }}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="skill-name">{skill}</span>
                <ArrowUpRight size={15} className="skill-arrow" />
              </div>
            ))}
          </div>
          <p className="skills-footnote">Skills shown reflect technologies I've studied or am currently practicing.</p>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-label"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Learning by <span className="gradient-text">building.</span></h2>
            <a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} link`}>
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
          <p className="project-warning">Before publishing, replace these sample project cards and links with your real work.</p>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-label"><span>04</span> / CONTACT</div>
          <div className="contact-panel">
            <div className="contact-orb" />
            <p className="contact-kicker">HAVE A PROJECT OR AN IDEA?</p>
            <h2>Let's make something<br /><span className="gradient-text">worth sharing.</span></h2>
            <p className="contact-copy">I'm open to learning opportunities, collaboration, and connecting with fellow developers.</p>
            <a className="button button-primary" href="mailto:your.email@example.com">Say hello <Mail size={16} /></a>
            <div className="contact-links">
              <a href="https://github.com/bavxxh" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/bavesh-cse/" target="_blank" rel="noreferrer"><Code2 size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">B.</span><span>BAVESH<span className="brand-dot">.</span></span></a>
        <p>Designed with curiosity. Built with code.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;