import { MapPin, MessageCircle, Star } from 'lucide-react'
import { restaurant } from '../data'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow">Restaurante francés en Zapopan</p>
        <h1>Una pausa francesa, elegante y cercana.</h1>
        <p className="hero-text">Café Pia combina sabor, ubicación práctica y reservaciones por WhatsApp para que cada visita se sienta simple, cálida y memorable.</p>
        <div className="hero-actions">
          <a className="button primary" href={restaurant.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Reservar por WhatsApp</a>
          <a className="button ghost" href={restaurant.maps} target="_blank" rel="noreferrer"><MapPin size={19} /> Abrir Google Maps</a>
        </div>
        <div className="hero-proof" aria-label="Calificación de Café Pia">
          <span><Star size={18} fill="currentColor" /> {restaurant.rating} en Google</span>
          <span>{restaurant.category}</span>
          <span>{restaurant.address}</span>
        </div>
      </div>
      <div className="hero-visual reveal" aria-hidden="true">
        <div className="image-frame"><img src="/hero.jpg" alt="Interior y platillos de Café Pia" /></div>
        <div className="floating-card">Bistró moderno · Reservas fáciles · Sabor francés</div>
      </div>
    </header>
  )
}
