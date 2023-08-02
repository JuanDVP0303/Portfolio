import propTypes from "prop-types";
export function Projects() {
  return (
    <div className="projects-section">
      <h2>Proyectos</h2>
      <section id="projects-container">
        <ProjectsCards
          title="Mokepon"
          img="https://i.imgur.com/bDcR4HS.png"
          page="https://juandvp0303.github.io/Mokepon/"
          repo="https://github.com/JuanDVP0303/Mokepon"
          description="Un juego inspirado en Pokémon con JS y asincronismo"
        />
        <ProjectsCards
          title="Tic-Tac-Toe with ReactJS"
          img="https://i.imgur.com/oZqlDLm.png"
          repo="https://github.com/JuanDVP0303/Tic-Tac-Toe-With-REACT"
          page="https://juandvp0303.github.io/Tic-Tac-Toe-With-REACT/"
          description="El clásico juego de Tic Tac Toe con React JS"
        />
        <ProjectsCards
          title="React Task list"
          img="https://i.imgur.com/n5TtS3u.png"
          page="https://juandvp0303.github.io/React-task-list/"
          repo="https://github.com/JuanDVP0303/React-task-list"
          description="Lista de tareas con ReactJS"
        />
        <ProjectsCards
          title="AnimationLand"
          img="https://i.imgur.com/OLprRAx.png"
          repo="https://github.com/JuanDVP0303/AnimationLand"
          page="https://juandvp0303.github.io/AnimationLand/"
          description="Juego al estilo `Golpea al topo` con JS y CSS animations"
        />
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
  description: propTypes.string.isRequired
};
