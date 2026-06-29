import {
  Bean,
  Beer,
  Croissant,
  CalendarDays,
  Coffee,
  CupSoda,
  ForkKnife,
  HeartHandshake,
  Camera,
  MapPin,
  MessageCircle,
  Moon,
  Navigation,
  Sparkles,
  Utensils,
  Wine,
} from 'lucide-react'
import './App.css'

const whatsappUrl = 'https://wa.me/523319750747?text=Hola%20Caf%C3%A9%20P%C3%ADa%2C%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n.'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Av%20Naciones%20Unidas%206780%20Local%204%2C%20Zapopan%2045129'

const menuSections = [
  {
    title: 'Panadería',
    icon: Croissant,
    note: 'Pan de casa, aromas de horno y piezas para empezar lento.',
    items: ['Croissant de mantequilla', 'Pan dulce de temporada', 'Tostado con mermelada artesanal'],
  },
  {
    title: 'Cocina',
    icon: Utensils,
    note: 'Platos cálidos para sobremesa: sencillos, cuidados y bien servidos.',
    items: ['Huevos al gusto Pía', 'Sándwich de pan artesanal', 'Ensalada verde con toque cítrico'],
  },
  {
    title: 'Tragos',
    icon: Wine,
    note: 'La noche baja el ritmo con copas, conversación y luz dorada.',
    items: ['Spritz de la casa', 'Carajillo clásico', 'Coctel cítrico de temporada'],
  },
  {
    title: 'Bebidas',
    icon: Coffee,
    note: 'Café, infusiones y bebidas frescas para acompañar cada visita.',
    items: ['Espresso y cappuccino', 'Tisana fría', 'Limonada con hierbas'],
  },
]

const gallery = [
  { src: '/hero.jpg', label: 'Mesa servida con pan, café y luz cálida', className: 'wide' },
  { src: '/galeria1.jpg', label: 'Detalles de cocina para compartir' },
  { src: '/galeria2.jpg', label: 'Bebidas para sobremesa y noche' },
  { src: '/galeria3.jpg', label: 'Rincones con ambiente de Café Pía', className: 'tall' },
]

const hours = [
  ['Lunes a Jueves', '09:00 a 00:00'],
  ['Viernes y Sábado', '08:30 a 00:00'],
  ['Domingo', '08:30 a 17:00'],
]

function App() {
  return (
    <div className="pia-site">
      <nav className="pia-nav" aria-label="Navegación principal">
        <a className="pia-brand" href="#inicio" aria-label="Café Pía inicio">
          <img src="/logo.png" alt="Logo de Café Pía" />
          <span>Café Pía</span>
        </a>
        <div className="pia-links">
          <a href="#historia">Historia</a>
          <a href="#menu">Menú</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#galeria">Galería</a>
        </div>
        <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Reservar
        </a>
      </nav>

      <main>
        <header className="hero" id="inicio">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Café Pía · Zapopan</p>
            <h1>Pan, cocina y tragos.<br />Hechos para quedarse.</h1>
            <p className="hero-text">Un lugar donde cada detalle está hecho con amor y propósito.</p>
            <div className="hero-actions">
              <a className="button primary" href="#menu"><ForkKnife size={18} /> Ver menú</a>
              <a className="button secondary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Reservar por WhatsApp</a>
            </div>
            <div className="hero-note"><Sparkles size={18} /> Hay sabores que merecen quedarse más tiempo.</div>
          </div>
          <div className="hero-image reveal-up" aria-label="Ambiente cálido de Café Pía">
            <img src="/hero.jpg" alt="Ambiente interior gastronómico de Café Pía" />
            <div className="hero-card"><Moon size={18} /> Pan por la mañana, cocina de sobremesa y tragos al caer la noche.</div>
          </div>
        </header>

        <section className="section story" id="historia">
          <div className="section-title left">
            <p className="eyebrow">Historia de Café Pía</p>
            <h2>Una casa verde oscuro para comer rico, conversar sin prisa y volver.</h2>
          </div>
          <div className="story-grid">
            <article className="paper-card feature-card">
              <HeartHandshake />
              <p>Café Pía reúne pan, cocina y tragos en un ambiente artesanal y elegante: una mesa cercana, detalles cuidados y esa calidez que invita a quedarse un poco más.</p>
            </article>
            <article className="paper-card"><Bean /><h3>Artesanal</h3><p>Texturas de pan, café recién servido y una cocina pensada para compartir.</p></article>
            <article className="paper-card"><Beer /><h3>Nocturno cálido</h3><p>Luz baja, bebidas y tragos para cerrar el día con calma.</p></article>
          </div>
        </section>

        <section className="section menu" id="menu">
          <div className="section-title">
            <p className="eyebrow">Menú</p>
            <h2>Cuatro momentos, una misma mesa.</h2>
            <p>Una carta editorial y antojadiza: panadería, cocina, tragos y bebidas con carácter de barrio elegante.</p>
          </div>
          <div className="menu-grid">
            {menuSections.map(({ title, icon: Icon, note, items }) => (
              <article className="menu-panel" key={title}>
                <div className="menu-icon"><Icon size={30} /></div>
                <h3>{title}</h3>
                <p>{note}</p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experiencia">
          <div className="experience-card">
            <p className="eyebrow">Experiencia Pía</p>
            <h2>La sobremesa como ritual.</h2>
            <p>Ven por café y pan, quédate por la cocina, regresa por los tragos. Café Pía se siente como ese punto de encuentro donde la comida, la música baja y la luz cálida hacen que el tiempo vaya más lento.</p>
            <div className="experience-points">
              <span><Croissant /> Horno y pan</span>
              <span><CupSoda /> Bebidas cuidadas</span>
              <span><Wine /> Tragos de noche</span>
            </div>
          </div>
        </section>

        <section className="section location" id="ubicacion">
          <div>
            <p className="eyebrow">Horarios y ubicación</p>
            <h2>Av Naciones Unidas 6780 Local 4, Zapopan 45129.</h2>
            <div className="hours-card">
              {hours.map(([day, time]) => <p key={day}><strong>{day}</strong><span>{time}</span></p>)}
            </div>
            <div className="location-actions">
              <a className="button primary" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={18} /> Cómo llegar</a>
              <a className="button secondary" href="tel:+523319750747"><MapPin size={18} /> 33 1975 0747</a>
            </div>
          </div>
          <iframe title="Mapa de Café Pía" src="https://www.google.com/maps?q=Av%20Naciones%20Unidas%206780%20Local%204%2C%20Zapopan%2045129&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </section>

        <section className="section reservations" id="reservaciones">
          <CalendarDays />
          <p className="eyebrow">Reservaciones por WhatsApp</p>
          <h2>Tu mesa puede empezar con un mensaje.</h2>
          <p>Escríbenos para reservar, preguntar por horarios o planear una visita con pan, cocina y tragos.</p>
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Reservar por WhatsApp</a>
        </section>

        <section className="section gallery" id="galeria">
          <div className="section-title left"><p className="eyebrow">Galería</p><h2>Un mosaico de mesa, barra y momentos.</h2></div>
          <div className="mosaic">
            {gallery.map((image) => <figure className={image.className || ''} key={image.src}><img src={image.src} alt={image.label} /><figcaption>{image.label}</figcaption></figure>)}
          </div>
        </section>

        <section className="section community" id="instagram">
          <Camera size={32} />
          <p className="eyebrow">Instagram / comunidad</p>
          <h2>Lo que pasa en Café Pía también se comparte.</h2>
          <p>Sigue la conversación, los antojos del día y los momentos de quienes hacen comunidad alrededor de la mesa.</p>
          <a className="button secondary" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Camera size={18} /> Ver Instagram</a>
        </section>
      </main>

      <footer className="footer">
        <div><h2>Café Pía</h2><p>Pan, cocina y tragos. Hechos para quedarse.</p></div>
        <div><strong>Contacto</strong><a href="tel:+523319750747">33 1975 0747</a><a href={mapsUrl} target="_blank" rel="noreferrer">Av Naciones Unidas 6780 Local 4, Zapopan 45129</a></div>
        <p className="copyright">© 2026 Café Pía. Hecho con una identidad cálida, artesanal y verde oscuro.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp"><MessageCircle size={28} /></a>
    </div>
  )
}

export default App
