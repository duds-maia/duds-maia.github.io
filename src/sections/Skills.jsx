import { useEffect, useRef } from 'react'

const skillsData = [
  {
    icon: '⚛️',
    title: 'Frontend',
    desc: 'Interfaces modernas, responsivas e otimizadas para performance e SEO.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui']
  },
  {
    icon: '🖥️',
    title: 'Backend',
    desc: 'APIs robustas, seguras e escaláveis para suportar qualquer volume de usuários.',
    tags: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL', 'REST API']
  },
  {
    icon: '🗄️',
    title: 'Banco de Dados',
    desc: 'Modelagem eficiente e otimização de consultas para máxima performance.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle']
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud',
    desc: 'Deploy automatizado, CI/CD e infraestrutura em nuvem de alta disponibilidade.',
    tags: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux']
  },
  {
    icon: '🤖',
    title: 'IA & Automação',
    desc: 'Integração com APIs de IA e automação de processos para produtividade.',
    tags: ['OpenAI API', 'LangChain', 'n8n', 'Web Scraping', 'Python Scripts']
  }
]

function Skills() {
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
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)', margin: '0 -4%', padding: '6rem 4%' }} ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          Habilidades
        </div>
        <h2 className="section-title">Stack Tecnológico</h2>
        <p className="section-desc">Tecnologias que domino e utilizo para entregar projetos de alta qualidade.</p>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div className="skill-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <div className="skill-tags">
              {skill.tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
