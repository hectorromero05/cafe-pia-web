import { Star } from 'lucide-react'
import { restaurant } from '../data'
const notes = ['Ambiente ideal para una comida tranquila en Zapopan.', 'Reservar por WhatsApp hace la experiencia rápida y cómoda.', 'Cocina francesa casual con presentación premium.']
export default function Testimonials() {
  return <section className="section testimonials"><div className="section-heading"><p className="eyebrow">Reseñas</p><h2>Prueba social lista para crecer.</h2><p>Calificación publicada: {restaurant.rating}. Reseñas reportadas: {restaurant.reviews}; dejamos testimonios editoriales como guía visual hasta integrar reseñas reales.</p></div><div className="review-grid">{notes.map((note) => <article className="review-card" key={note}><div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><p>“{note}”</p><strong>Café Pia Experience</strong></article>)}</div></section>
}
