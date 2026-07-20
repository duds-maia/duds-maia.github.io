function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <div style={{ marginBottom: '1.5rem', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700 }}>
        &lt;/&gt; Dev <span style={{ color: 'var(--accent)' }}>E.M</span> &lt;/&gt;
      </div>
      <ul className="footer-links">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>Sobre</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('#skills') }}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>Projetos</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>Serviços</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>Contato</a></li>
      </ul>
      <p> 2026 &lt;/&gt; Dev E.M &lt;/&gt;. Todos os direitos reservados. Desenvolvido com paixão e código limpo.</p>
    </footer>
  )
}

export default Footer
