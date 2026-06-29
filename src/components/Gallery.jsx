const images = ['/galeria1.jpg', '/galeria2.jpg', '/galeria3.jpg']
export default function Gallery() {
  return <section className="section gallery" id="galeria"><div className="section-heading"><p className="eyebrow">Galería</p><h2>Detalles que abren el apetito.</h2></div><div className="gallery-grid">{images.map((src, index) => <figure key={src}><img src={src} alt={`Galería Café Pia ${index + 1}`} /><figcaption>{['Brunch con acento francés','Cocina cuidada','Momentos para compartir'][index]}</figcaption></figure>)}</div></section>
}
