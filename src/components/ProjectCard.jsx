import './ProjectCard.css'

function ProjectCard({ project, onClick }) {
  // 确保图片路径包含 base URL
  const getImageSrc = (src) => {
    if (!src) return null
    // 如果已经是完整路径，直接返回
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    // 确保路径以 / 开头，Vite 会自动处理 base URL
    return src.startsWith('/') ? src : `/${src}`
  }

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-thumbnail">
        {project.thumbnail ? (
          <img src={`${import.meta.env.BASE_URL}${project.thumbnail.replace(/^\//, '')}`} alt={project.name} />
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



