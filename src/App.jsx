
import { useEffect, useState } from "react";
import {
  profile,
  skills,
  projects,
  journey,
  education,
  internships,
  certificates
} from "./data";


const links = [
  "about",
  "education",
  "skills",
  "internships",
  "projects",
  "certificates",
  "journey",
  "contact"
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a className="logo" href="#top">SC</a>

      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "links open" : "links"}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI((n) => (n + 1) % profile.roles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="where">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="role" key={i}>{profile.roles[i]}</p>
        <p className="intro">{profile.intro}</p>

        <div className="cta">
          <a className="btn solid" href="#projects">
            See my work
          </a>

          <a className="btn" href="#contact">
            Get in touch
          </a>

          {profile.resume && (
            <a
              className="btn"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          )}
        </div>
      </div>

      <div className="arch" aria-hidden="true">
        <span className="initials">{initials}</span>
        <img
          src="/profile.jpg"
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="sec">
      <h2>About Me</h2>

      <div className="two">
        <div>
          {profile.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <p className="edu">
            <b>{profile.degree}</b>
            <br />
            {profile.college}, {profile.session}
          </p>
        </div>

        <ul className="stats">
          {profile.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="sec">
      <h2>Education</h2>

      <div className="grid">
        {education.map((item) => (
          <article className="card" key={item.degree}>
            <div className="card-top">
              <h3>{item.degree}</h3>
            </div>

            <p>{item.college}</p>
            <p className="muted">{item.duration}</p>

            <ul className="tags">
              <li>{item.result}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const groups = Object.keys(skills);
  const [tab, setTab] = useState(groups[0]);

  return (
    <section id="skills" className="sec">
      <h2>Technical Skills</h2>

      <div className="chips" role="tablist">
        {groups.map((group) => (
          <button
            key={group}
            role="tab"
            aria-selected={group === tab}
            className={group === tab ? "chip on" : "chip"}
            onClick={() => setTab(group)}
          >
            {group}
          </button>
        ))}
      </div>

      <ul className="bars" key={tab}>
        {skills[tab].map((skill) => (
          <li key={skill.name}>
            <div className="bar-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="track">
              <i style={{ width: `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Internships() {
  return (
    <section id="internships" className="sec">
      <h2>Internships & Training</h2>

      <div className="grid">
        {internships.map((item) => (
          <article className="card" key={`${item.company}-${item.role}`}>
            <div className="card-top">
              <h3>{item.role}</h3>
            </div>

            <p><strong>{item.company}</strong></p>
            <p className="muted">{item.location}</p>
            <p className="muted">{item.duration}</p>
            <p>{item.description}</p>

            <ul className="tags">
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            {item.certificate && (
              <div className="card-links">
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate ↗
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const types = [
    "All",
    ...new Set(projects.map((project) => project.type))
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      filter === "All" || project.type === filter
  );

  return (
    <section id="projects" className="sec">
      <h2>Projects</h2>

      <div className="chips">
        {types.map((type) => (
          <button
            key={type}
            className={type === filter ? "chip on" : "chip"}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <article className="card" key={project.title}>
            <div className="card-top">
              <h3>{project.title}</h3>
              <span
                className={`tag st-${project.status.replace(" ", "")}`}
              >
                {project.status}
              </span>
            </div>

            <p>{project.desc}</p>

            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="card-links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site ↗
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="sec">
      <h2>Certificates</h2>

      <div className="grid">
        {certificates.map((item) => (
          <article className="card cert" key={item.title}>
            <a
              className="cert-preview"
              href={item.file}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.title} certificate`}
            >
              <img
                src={item.preview}
                alt={`${item.title} certificate`}
                loading="lazy"
              />
            </a>

            <div className="card-top">
              <h3>{item.title}</h3>
              {item.badge && (
                <span className="tag st-Working">{item.badge}</span>
              )}
            </div>

            <p><strong>{item.issuer}</strong></p>
            <p className="muted">{item.date}</p>
            <p>{item.detail}</p>

            <div className="card-links">
              <a href={item.file} target="_blank" rel="noreferrer">
                Open Certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="sec">
      <h2>My Journey</h2>

      <ol className="line">
        {journey.map((item) => (
          <li key={item.title}>
            <time>{item.when}</time>
            <h3>{item.title}</h3>
            <p className="muted">{item.where}</p>
            <p>{item.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [spam, setSpam] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const keyReady =
    profile.formKey && !profile.formKey.startsWith("PASTE");

  const send = async (event) => {
    event.preventDefault();

    // Bots tick the hidden checkbox; real visitors never see it.
    if (spam) return;

    // Fallback: no key yet, open the visitor's email app instead.
    if (!keyReady) {
      const subject = encodeURIComponent(
        `Portfolio message from ${form.name}`
      );
      const body = encodeURIComponent(
        `${form.message}\n\nFrom: ${form.name} (${form.email})`
      );
      window.location.href =
        `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: profile.formKey,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio Website",
          name: form.name,
          email: form.email,
          message: form.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="sec">
      <h2>Contact Me</h2>

      <div className="two">
        <div>
          <p>
            Have an internship, project or idea?
            Write to me and I'll reply soon.
          </p>

          <p>
            <a href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>

          <p className="social">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <form onSubmit={send} className="form">
          <label>
            Your Name
            <input
              required
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </label>

          <label>
            Your Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />
          </label>

          <label>
            Message
            <textarea
              required
              name="message"
              rows="4"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
            />
          </label>

          <input
            type="checkbox"
            name="botcheck"
            className="hp"
            tabIndex="-1"
            autoComplete="off"
            checked={spam}
            onChange={(event) => setSpam(event.target.checked)}
          />

          <button
            className="btn solid"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status === "sent" &&
              "Thank you! Your message was sent. I'll reply soon."}
            {status === "error" &&
              `Something went wrong. Please email me directly at ${profile.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certificates />
        <Journey />
        <Contact />
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </footer>
    </>
  );
}