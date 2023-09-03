import propTypes from "prop-types";
export function Projects() {
  const projects = [
    {
      title: "Mokepon",
      img: "https://i.imgur.com/bDcR4HS.png",
      page: "https://juandvp0303.github.io/Mokepon/",
      repo: "https://github.com/JuanDVP0303/Mokepon",
      description: "Un juego inspirado en Pokémon con JS y asincronismo",
    },
    {
      title: "Tic-Tac-Toe with ReactJS",
      img: "https://i.imgur.com/oZqlDLm.png",
      repo: "https://github.com/JuanDVP0303/Tic-Tac-Toe-With-REACT",
      page: "https://juandvp0303.github.io/Tic-Tac-Toe-With-REACT/",
      description: "El clásico juego de Tic Tac Toe con React JS",
    },
    {
      title: "React Task list",
      img: "https://i.postimg.cc/qM99Kc0L/image.png",
      page: "https://react-task-list-seven.vercel.app",
      repo: "https://github.com/JuanDVP0303/React-task-list",
      description: "Lista de tareas con ReactJS",
    },
    {
      title: "AnimationLand",
      img: "https://i.imgur.com/OLprRAx.png",
      repo: "https://github.com/JuanDVP0303/AnimationLand",
      page: "https://juandvp0303.github.io/AnimationLand/",
      description: "Juego al estilo `Golpea al topo` con JS y CSS animations",
    },
    {
      title: "Shoppi! Ecommerce",
      img: "https://i.postimg.cc/Pf8mV1Y9/image.png",
      repo: "https://github.com/JuanDVP0303/Shoppi-react-ecommerce",
      page: "https://harmonious-kangaroo-f6c737.netlify.app",
      description: "Ecommerce con asincronía y Api rest, y un sistema de login con localStorage",
    },
    {
      title: "Flesystem Page",
      img: "https://i.postimg.cc/FRwn5mP4/Captura-de-pantalla-2023-09-03-113844.png",
      repo: "https://github.com/JuanDVP0303/flesystem-page",
      page: "https://flesystem-page-vov2.vercel.app/",
      description: "SPA de la empresa de flejes flesystem, por motivos de tesis universitaria",
    },
  ];

  return (
    <div className="projects-section">
      <h2>Proyectos</h2>
      <section id="projects-container">
        
        {projects.map((project,i) => {
          return <ProjectsCards
          key={i}
          title={project.title}
          img={project.img}
          page={project.page}
          repo={project.repo}
          description={project.description}
        />
        
        })}

      </section>
    </div>
  );
}

function ProjectsCards({ title, img, repo, page, description }) {
  return (
    <article className="projects-article">
      <img className="projects-imgs" src={img} alt="" />
      <h2>{title}</h2>

      <p className="projects-descriptions">{description}</p>

      <div className="inputs-repository-container">
        <input
          type="button"
          value="Ver repositorio"
          onClick={() => window.open(repo, "_blank")}
        />
        <input
          type="button"
          value="Ver página"
          onClick={() => window.open(page, "_blank")}
        />
      </div>
    </article>
  );
}

ProjectsCards.propTypes = {
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  repo: propTypes.string.isRequired,
  page: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
