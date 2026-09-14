import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { QuienesSomos } from './components/QuienesSomos'
import { Portfolio } from './components/Portfolio'
import { CultivoCalidad } from './components/CultivoCalidad'
import { ProyeccionInternacional } from './components/ProyeccionInternacional'
import { OroVerde } from './components/OroVerde'
import { Confianza } from './components/Confianza'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Portfolio />
        <CultivoCalidad />
        <ProyeccionInternacional />
        <OroVerde />
        <Confianza />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
