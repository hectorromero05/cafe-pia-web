import { Clock, MapPin, Phone, Sparkles } from 'lucide-react'
import { restaurant, specialties } from '../data'

export default function About() {
  return (
    <section className="section about" id="historia">
      <div className="section-heading left">
        <p className="eyebrow">Historia</p>
        <h2>El encanto de un café francés con ritmo de Guadalajara.</h2>
        <p>Café Pia nace para quienes buscan comer bien sin complicarse: una propuesta francesa limpia, actual y acogedora en Av. Naciones Unidas.</p>
      </div>
      <div className="about-grid">
        <article className="story-card feature"><Sparkles /><h3>Especialidad de la casa</h3><p>{specialties.join('. ')}.</p></article>
        <article className="story-card"><MapPin /><h3>Ubicación</h3><p>{restaurant.address}</p></article>
        <article className="story-card"><Clock /><h3>Horario</h3><p>{restaurant.hours}</p></article>
        <article className="story-card"><Phone /><h3>Contacto directo</h3><p>{restaurant.displayPhone}</p></article>
      </div>
    </section>
  )
}
