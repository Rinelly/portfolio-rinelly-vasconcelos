import "./Footer.scss";

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
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
