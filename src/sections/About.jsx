import { useEffect, useRef } from 'react'

function About() {
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
    <section className="section" id="about" ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          Sobre Mim
        </div>
        <h2 className="section-title">Quem está por trás do código</h2>
        <p className="section-desc">Conheça minha trajetória e o que me motiva a criar soluções digitais de excelência.</p>
      </div>
      <div className="about-grid">
        <div className="about-image reveal">
          <div className="about-image-frame">
            <div className="about-image-inner">
              <img src="/foto.jpg" alt="Foto de perfil" className="about-photo" />
            </div>
          </div>
        </div>
        <div className="about-info reveal">
          <h3>Desenvolvedor Full Stack em formação, apaixonado por tecnologia</h3>
          <p>Estou atualmente no 4º semestre do curso de Análise e Desenvolvimento de Sistemas, construindo uma base sólida em desenvolvimento web e dedicando boa parte do meu tempo a projetos práticos para aplicar o que aprendo em sala de aula no mundo real.</p>
          <p>Trabalho com tecnologias modernas do mercado, sempre focando em entregar código limpo, boas práticas de arquitetura e experiências de usuário bem cuidadas. Estou em busca de oportunidades para aprender ainda mais e crescer como profissional.</p>
          <div className="about-tags">
            {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'].map(tag => (
              <span className="about-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <div className="about-socials">
            <a href="https://github.com/duds-maia" className="social-link" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/eduardo-maia-9a51b0265/" className="social-link" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/dudsmaia__" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
