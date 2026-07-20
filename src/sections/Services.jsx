import { useEffect, useRef } from 'react'

const servicesData = [
  { number: '01', title: 'Desenvolvimento Web', desc: 'Sites institucionais, landing pages de alta conversão e aplicações web completas com as melhores tecnologias do mercado.' },
  { number: '02', title: 'Aplicações Full Stack', desc: 'Sistemas completos com frontend, backend, banco de dados e deploy na nuvem. Do MVP ao produto enterprise.' },
  { number: '03', title: 'Integração com IA', desc: 'Implementação de chatbots, automações e recursos de inteligência artificial para otimizar processos do seu negócio.' },
  { number: '04', title: 'Otimização para Conversão', desc: 'Landing pages rápidas e otimizadas para conversão, com foco em performance, boas práticas de UX e testes A/B.' },
  { number: '05', title: 'Consultoria Técnica', desc: 'Análise de arquitetura, code review e orientação estratégica para escalar seu produto digital.' },
  { number: '06', title: 'Manutenção & Suporte', desc: 'Monitoramento, atualizações de segurança e melhorias contínuas para manter seu projeto sempre no ar.' }
]

function Services() {
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
    <section className="section" id="services" style={{ background: 'var(--bg-secondary)', margin: '0 -4%', padding: '6rem 4%' }} ref={sectionRef}>
      <div className="section-header reveal">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          Serviços
        </div>
        <h2 className="section-title">Como posso ajudar seu negócio</h2>
        <p className="section-desc">Soluções completas do conceito ao deploy, focadas em resultados mensuráveis.</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, i) => (
          <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="service-number">{service.number}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
