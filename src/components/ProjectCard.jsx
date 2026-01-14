import './ProjectCard.css'

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-thumbnail">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.name} />
        ) : (
          <div className="placeholder-thumbnail">
            <span>📁</span>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <p className="project-description">{project.shortDescription}</p>
      </div>
    </div>
  )
}

export default ProjectCard

