import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './sections/Hero'
import TechMarquee from './sections/TechMarquee'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import SectionCTA from './components/SectionCTA'

function App() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <Hero />
      <TechMarquee />
      <About />
      <SectionCTA text="Curtiu minha trajetória? Vamos conversar sobre seu projeto." />
      <Skills />
      <SectionCTA text="Tenho as skills que seu projeto precisa. Bora conversar?" />
      <Projects />
      <SectionCTA text="Gostou dos projetos? Posso construir algo assim pra você." />
      <Services />
      <SectionCTA text="Encontrou o serviço ideal? Fale comigo agora mesmo." />
      <Contact />
      <Footer />
    </>
  )
}

export default App
