import "./Projects.scss";

const projects = [
  {
    title: "DecoderFox",
    image: "../../src/assets/images/img-projeto1.png",
    description: "Projeto criado para criptografar e descriptografar textos.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://decoder-fox.vercel.app/",
    github: "https://github.com/Rinelly/decodificador-de-texto",
  },
  {
    title: "Tabata Oliveira",
    image: "../../src/assets/images/img-projeto2.png",
    description: "Página de links criada para bio do Instagram.",
    tech: ["HTML", "CSS"],
    demo: "https://tabata-oliveira.vercel.app/",
    github: "https://github.com/Rinelly/tabata-oliveira",
  },
  {
    title: "Fokus",
    image: "../../src/assets/images/img-projeto3.png",
    description: "Projeto Pomodoro desenvolvido com HTML, CSS e JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://fokus-alura-psi.vercel.app/",
    github: "https://github.com/Rinelly/Fokus-projeto-base",
  },
  {
    title: "Jogo da Memória",
    image: "../../src/assets/images/print-jogo-da-memoria.png",
    description: "Jogo da memória desenvolvido com React e TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    demo: "https://jogo-da-memoria-react-gamma.vercel.app/",
    github: "https://github.com/Rinelly/jogo-da-memoria-react",
  },
  {
    title: "Calculadora",
    image: "../../src/assets/images/print-calculadora.png",
    description: "Calculadora desenvolvida com JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://calculadora-tau-lemon.vercel.app/",
    github: "https://github.com/Rinelly/calculadora-js",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projetos</h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <article className="project__card" key={index}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project__tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project__links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Ver Online
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
