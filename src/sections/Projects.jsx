import { useEffect, useRef } from 'react'

const projectsData = [
  {
    icon: <img src="public/Imagem do ChatGPT 1 de out, de 2026, 14_14_02.png" alt="logo-me-socorre" />,
    title: 'Me Socorre',
    desc: 'Site para solucionar quaisquer problemas que voce tenha na sua casa, desde a instalar uma tomada ate arrumar o encanamento da sua parede.',
    techs: ['React', 'Prisma ORM', 'PostgreSQL', 'Integração com IA'],
    link: 'https://trabalho-edecio-socorro.vercel.app/' 
  },
  {
    icon: '🌥️',
    title: 'App de clima',
    desc: 'Aplicativo de previsão do tempo com interface moderna e integração com APIs meteorológicas.',
    techs: ['Vanilla', 'TypeScript', 'OpenWeatherMap'],
    link: 'https://duds-maia.github.io/app_clima/' // TODO: substitua pelo link real do projeto (site publicado, deploy, GitHub, etc.)
  },
  {
    icon: '🤖',
    title: 'Chatbot com IA',
    desc: 'Assistente virtual inteligente integrado com OpenAI, capaz de responder perguntas e automatizar atendimento ao cliente.',
    techs: ['Next.js', 'OpenAI', 'Node.js'],
    link: '#' // TODO: substitua pelo link real do projeto
  }
]

function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, { threshold: 0.1 })

    const reveals = sectionRef.current.querySelectorAll('.reveal')
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          Portfólio
        </div>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-desc">Alguns dos projetos que desenvolvi, focados em performance, design e resultados.</p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-image">
              <span className="project-icon">{project.icon}</span>
              <div className="project-image-overlay">
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Clique para ver o projeto</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-meta">
                <div className="project-tech">
                  {project.techs.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <span className="project-link">Ver projeto →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
