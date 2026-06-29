import { menuItems } from '../data'

export default function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Especialidades & menú</p>
        <h2>Clásicos franceses para venir, compartir y volver.</h2>
      </div>
      <div className="menu-list">
        {menuItems.map((item) => <article className="menu-card" key={item.title}><div><h3>{item.title}</h3><p>{item.desc}</p></div><strong>{item.price}</strong></article>)}
      </div>
    </section>
  )
}
