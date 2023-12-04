import { experience } from "../assets/utils"
function Experience() {
  return (
    <section className="experience-section">
        <h2 id="experience">Experiencia</h2>
        <div>
        {experience.map((exp,i) => {
            return <article key={i}>
                <h2>{exp.company}</h2>
                <h3>{exp.job}</h3>
                <img src={exp.image} alt="job" />
                <p>{exp.description}</p>
                <a className="experience-button" href={exp.link} target="_blank" rel="noreferrer">{exp.link ? "Ver página" : "En desarrollo"}</a>
            </article>
        })}
        </div>
    </section>
    )
}

export default Experience