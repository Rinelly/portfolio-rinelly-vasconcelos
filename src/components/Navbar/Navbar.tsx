import "./Navbar.scss";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("section-active");
          } else {
            entry.target.classList.remove("section-active");
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            className={activeSection === "about" ? "active" : ""}
            href="#about"
          >
            SOBRE
          </a>
        </li>
        <li>
          <a
            className={activeSection === "projects" ? "active" : ""}
            href="#projects"
          >
            PROJETOS
          </a>
        </li>
        <li>
          <a
            className={activeSection === "skills" ? "active" : ""}
            href="#skills"
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            className={activeSection === "contact" ? "active" : ""}
            href="#contact"
          >
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
