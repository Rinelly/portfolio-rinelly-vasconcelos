import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>
          © {new Date().getFullYear()} Rinelly Vasconcelos. Todos os direitos
          reservados.
        </p>

        <div className="footer__links">
          <a
            href="https://github.com/Rinelly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rinelly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
