import "./App.css";

export default function App() {
  const whatsapp = "https://wa.me/523330000000";

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Sabor Local</h2>
        <div>
          <a href="#menu">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#ubicacion">Ubicación</a>
          <a href={whatsapp} target="_blank">Pedir</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <span>Promos disponibles hoy</span>
          <h1>Comida deliciosa, rápida y hecha con cariño</h1>
          <p>Platillos frescos, porciones generosas y servicio para llevar.</p>
          <div className="hero-buttons">
            <a href={whatsapp} target="_blank">Pedir por WhatsApp</a>
            <a href="#menu" className="secondary">Ver menú</a>
          </div>
        </div>
      </header>

      <section className="info">
        <div className="card">
          <h3>📍 Ubicación</h3>
          <p>Agrega aquí la dirección del negocio</p>
        </div>
        <div className="card">
          <h3>🕒 Horario</h3>
          <p>Lunes a domingo · 12:00 PM - 10:00 PM</p>
        </div>
        <div className="card">
          <h3>📞 Contacto</h3>
          <p>333 000 0000</p>
        </div>
      </section>

      <section className="menu" id="menu">
        <p className="section-label">Menú</p>
        <h2>Lo favorito de la casa</h2>

        <div className="menu-grid">
          <FoodCard
            img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
            title="Hamburguesa BBQ"
            desc="Carne jugosa, queso, tocino, papas y bebida."
            price="$149"
          />
          <FoodCard
            img="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop"
            title="Tacos Especiales"
            desc="Orden de tacos con salsa de la casa."
            price="$99"
          />
          <FoodCard
            img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop"
            title="Combo Familiar"
            desc="Ideal para compartir entre 3 o 4 personas."
            price="$299"
          />
        </div>
      </section>

      <section className="gallery" id="galeria">
        <p className="section-label">Galería</p>
        <h2>Nuestros platillos</h2>

        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop" />
        </div>
      </section>

      <section className="reviews">
        <p className="section-label">Opiniones</p>
        <h2>Clientes felices</h2>

        <div className="review-grid">
          <Review text="Excelente sabor y muy buena atención." name="Juan Pérez" />
          <Review text="La mejor hamburguesa de la zona." name="María López" />
          <Review text="Rápido, rico y buen precio." name="Carlos Medina" />
        </div>
      </section>

      <section className="location" id="ubicacion">
        <div>
          <p className="section-label">Ubicación</p>
          <h2>Ven a visitarnos</h2>
          <p>Estamos listos para atenderte o preparar tu pedido para llevar.</p>
          <a href="https://maps.google.com" target="_blank">Abrir en Google Maps</a>
        </div>

        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Guadalajara,Jalisco&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      <section className="cta">
        <h2>¿Se te antojó?</h2>
        <p>Haz tu pedido por WhatsApp y lo preparamos para ti.</p>
        <a href={whatsapp} target="_blank">Ordenar ahora</a>
      </section>

      <footer>
        <h3>Sabor Local</h3>
        <p>Comida deliciosa, rápida y hecha con cariño.</p>
        <p>© 2026 Sabor Local. Todos los derechos reservados.</p>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank">
        💬
      </a>
    </div>
  );
}

function FoodCard({ img, title, desc, price }) {
  return (
    <div className="food-card">
      <img src={img} />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Review({ text, name }) {
  return (
    <div className="review">
      <div>⭐⭐⭐⭐⭐</div>
      <p>“{text}”</p>
      <strong>- {name}</strong>
    </div>
  );
}