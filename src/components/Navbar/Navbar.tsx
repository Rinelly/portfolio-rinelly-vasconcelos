import "./Navbar.scss";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector(".navbar");

      if (menuOpen && navbar && !navbar.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <button
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <ul>
        <li>
          <a
            className={activeSection === "about" ? "active" : ""}
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            SOBRE
          </a>
        </li>
        <li>
          <a
            className={activeSection === "projects" ? "active" : ""}
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            PROJETOS
          </a>
        </li>
        <li>
          <a
            className={activeSection === "skills" ? "active" : ""}
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            className={activeSection === "contact" ? "active" : ""}
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
