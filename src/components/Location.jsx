import { MapPinned, MessageCircle, Navigation } from 'lucide-react'
import { restaurant } from '../data'
export default function Location() {
  return <section className="section location" id="ubicacion"><div><p className="eyebrow">Mapa & reservaciones</p><h2>Encuéntranos en Loma Real, Zapopan.</h2><p>{restaurant.address}</p><div className="location-actions"><a className="button primary" href={restaurant.maps} target="_blank" rel="noreferrer"><Navigation size={18} /> Cómo llegar</a><a className="button dark" href={restaurant.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div><p className="micro"><MapPinned size={16} /> Restaurante francés cerca de mí · Café Pia · reservaciones por WhatsApp.</p></div><iframe title="Mapa de Café Pia" src="https://www.google.com/maps?q=20.6895573,-103.4146535&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
}
