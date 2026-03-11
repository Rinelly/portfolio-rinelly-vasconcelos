import "./Hero.scss";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1>
          RINELLY <br></br>VASCONCELOS
        </h1>

        <p>
          Desenvolvedora Front-end<br></br>com foco atual em Ciência de Dados e
          Inteligência Artificial.
        </p>

        <div className="hero__socials">
          <a
            href="https://www.linkedin.com/in/rinelly-vasconcelos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Rinelly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/5582994142169"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="hero__image"></div>

      <div className="hero__scroll">
        <img src="../images/icons/code.svg" alt="scroll" />
      </div>
    </section>
  );
}

export default Hero;
