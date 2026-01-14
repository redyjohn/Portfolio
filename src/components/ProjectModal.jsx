import { useEffect } from 'react'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{project.name}</h2>
          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag-large">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.thumbnail && (
          <div className="modal-thumbnail">
            <img src={project.thumbnail} alt={project.name} />
          </div>
        )}

        <div className="modal-body">
          <div className="presentation-content">
            {project.presentation.map((section, index) => (
              <div key={index} className="presentation-section">
                {section.type === 'heading' && (
                  <h3>{section.content}</h3>
                )}
                {section.type === 'paragraph' && (
                  <p>{section.content}</p>
                )}
                {section.type === 'list' && (
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'image' && (
                  <img src={section.src} alt={section.alt || ''} />
                )}
                {section.type === 'link' && (
                  <div className="presentation-link">
                    <a href={section.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      {section.text || section.url}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal



