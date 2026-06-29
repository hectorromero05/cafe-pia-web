import { restaurant } from '../data'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio de Café Pia">
        <img src="/logo.png" alt="Logo Café Pia" onError={(event) => { event.currentTarget.style.display = 'none' }} />
        <span>Café Pia</span>
      </a>
      <div className="nav-links">
        <a href="#historia">Historia</a>
        <a href="#menu">Menú</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Ubicación</a>
      </div>
      <a className="nav-cta" href={restaurant.whatsapp} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">
        Reservar
      </a>
    </nav>
  )
}
