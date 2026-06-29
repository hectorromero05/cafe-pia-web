import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'
import { restaurant } from './data'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <section className="final-cta" aria-labelledby="cta-title">
          <p className="eyebrow">Reserva hoy</p>
          <h2 id="cta-title">Tu mesa en Café Pia está a un mensaje.</h2>
          <p>Pregunta disponibilidad, menú o indicaciones por WhatsApp y llega directo a disfrutar.</p>
          <a className="button primary" href={restaurant.whatsapp} target="_blank" rel="noreferrer">Reservar / pedir por WhatsApp</a>
        </section>
        <Location />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}
