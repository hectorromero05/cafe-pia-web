import { restaurant } from '../data'
export default function Footer() {
  return <footer className="footer"><div><h2>Café Pia</h2><p>Restaurante francés moderno en Zapopan. Sabor, confianza y reservaciones simples.</p></div><div><strong>Contacto</strong><a href={`tel:${restaurant.phone}`}>{restaurant.displayPhone}</a><a href={restaurant.maps} target="_blank" rel="noreferrer">Google Maps</a></div><p className="copyright">© 2026 Café Pia. Landing optimizada para SEO local.</p></footer>
}
