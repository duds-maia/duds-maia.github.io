import { useEffect, useRef } from 'react'

const projectsData = [
  {
    icon: '🛒',
    title: 'E-commerce Premium',
    desc: 'Plataforma de e-commerce completa com painel administrativo, pagamentos integrados e otimização para conversão.',
    techs: ['Next.js', 'Node.js', 'Stripe'],
    link: '#' // TODO: substitua pelo link real do projeto (site publicado, deploy, GitHub, etc.)
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    desc: 'Dashboard de análise de dados em tempo real com gráficos interativos, relatórios automáticos e exportação de dados.',
    techs: ['React', 'Python', 'PostgreSQL'],
    link: '#' // TODO: substitua pelo link real do projeto
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
