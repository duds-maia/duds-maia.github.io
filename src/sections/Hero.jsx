import { useEffect } from 'react'

function Hero() {
  const trackWhatsApp = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact')
      window.fbq('track', 'Lead')
    }
  }

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Disponível para projetos
          </div>
          <h1>
            Desenvolvedor<br />
            <span className="gradient-text">Full Stack</span>
          </h1>
          <p className="hero-desc">
            Estudante de Análise e Desenvolvimento de Sistemas (4º semestre),
            transformando ideias em experiências digitais com React, Next.js, Node.js e Python.
            Criando soluções com foco em qualidade, aprendizado e resultado.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/5553981231850?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              className="btn-whatsapp-hero"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsApp}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.521.074-.794.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a href="#projects" className="btn-secondary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Ver Projetos
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>4º</h3>
              <p>Semestre em ADS</p>
            </div>
            <div className="stat-item">
              <h3>Full Stack</h3>
              <p>Área de Atuação</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Dedicação e Aprendizado</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="code-content">
              <span className="keyword">const</span> <span className="function">developer</span> = {'{'}<br />
              &nbsp;&nbsp;name: <span className="string">&quot;Full Stack Dev&quot;</span>,<br />
              &nbsp;&nbsp;stack: [<span className="string">&quot;React&quot;</span>, <span className="string">&quot;Next.js&quot;</span>, <span className="string">&quot;Node&quot;</span>],<br />
              &nbsp;&nbsp;passion: <span className="string">&quot;Criar produtos que convertem&quot;</span>,<br />
              &nbsp;&nbsp;<span className="function">build</span>: () =&gt; <span className="string">&quot;Resultados&quot;</span><br />
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
