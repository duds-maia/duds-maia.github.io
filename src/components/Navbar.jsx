import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={toggleMenu}>×</button>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>Sobre</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('#skills') }}>Skills</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>Projetos</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>Serviços</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>Contato</a>
        <a
          href="https://wa.me/5553981231850?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          className="btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.open("https://wa.me/5552981231850?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.", "_blank"); if(window.fbq){window.fbq('track','Contact');window.fbq('track','Lead');} }}
          style={{ marginTop: '1rem' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.521.074-.794.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar no WhatsApp
        </a>
      </div>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          &lt;/&gt; Dev <span>E.M</span> &lt;/&gt;
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>Sobre</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('#skills') }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}>Projetos</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>Serviços</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>Contato</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>Fale Comigo</a>
        <button className="mobile-menu-btn" onClick={toggleMenu}>☰</button>
      </nav>
    </>
  )
}

export default Navbar
