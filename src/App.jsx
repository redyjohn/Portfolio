import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import { projects } from './data/projects'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>我的作品集</h1>
        <p>展示我的專案與技術成果</p>
      </header>

      <main className="main-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default App

