import { MessageCircle } from 'lucide-react'
import { restaurant } from '../data'
export default function WhatsappButton() {
  return <a className="whatsapp" href={restaurant.whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp de Café Pia"><MessageCircle size={28} /></a>
}
