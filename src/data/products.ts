import cbdOil from '../assets/products/cbd_oil.webp'
import cbdOilLg from '../assets/products/cbd_oil@lg.webp'
import blackOil from '../assets/products/black_oil.webp'
import blackOilLg from '../assets/products/black_oil@lg.webp'
import extract from '../assets/products/extract.webp'
import extractLg from '../assets/products/extract@lg.webp'
import gel from '../assets/products/gel_analgesico.webp'
import gelLg from '../assets/products/gel_analgesico@lg.webp'
import fullSpectrum from '../assets/products/full_spectrum.webp'
import fullSpectrumLg from '../assets/products/full_spectrum@lg.webp'
import massageOil from '../assets/products/massage_oil.webp'
import massageOilLg from '../assets/products/massage_oil@lg.webp'
import shampoo from '../assets/products/shampoo.webp'
import shampooLg from '../assets/products/shampoo@lg.webp'

export type Product = {
  id: string
  name: string
  category: string
  presentation: string
  usage: string
  composition: string
  description: string
  highlights: string[]
  image: string
  imageLg: string
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'premium-cbd-oil',
    name: 'Premium CBD Oil',
    category: 'Aceite sublingual',
    presentation: '20 ml',
    usage: 'Uso sublingual · agitar antes de usar',
    composition: '100% CBD',
    description:
      'Nuestro aceite insignia: una formulación 100% CBD en gotero, pensada para acompañar una rutina diaria de bienestar y equilibrio.',
    highlights: ['100% CBD', 'Formato gotero de precisión', 'Elaborado en Colombia'],
    image: cbdOil,
    imageLg: cbdOilLg,
    featured: true,
  },
  {
    id: 'black-oil-premium',
    name: 'Black Oil Premium',
    category: 'Aceite sublingual',
    presentation: '5 ml',
    usage: 'Uso sublingual · agitar antes de usar',
    composition: 'CBD 92% · THC 8%',
    description:
      'La referencia más concentrada de nuestra línea premium, con una combinación de CBD y THC en proporción 92/8 según ficha de producto.',
    highlights: ['CBD + THC 92/8', 'Línea premium', 'Formato concentrado 5 ml'],
    image: blackOil,
    imageLg: blackOilLg,
  },
  {
    id: 'pure-premium-cannabis-extract',
    name: 'Pure Premium Cannabis Extract',
    category: 'Extracto sublingual',
    presentation: '50 ml',
    usage: 'Uso sublingual · agitar antes de usar',
    composition: '100% Cannabis',
    description:
      'Extracto sublingual elaborado a partir de cannabis, disponible en un formato mayor de 50 ml para un acompañamiento sostenido.',
    highlights: ['100% Cannabis', 'Formato 50 ml', 'Elaborado en Colombia'],
    image: extract,
    imageLg: extractLg,
  },
  {
    id: 'gel-analgesico-antiinflamatorio',
    name: 'Analgesic and Anti-Inflammatory',
    category: 'Gel de uso tópico',
    presentation: '125 g y 250 g',
    usage: 'Uso tópico',
    composition: 'CBD',
    description:
      'Gel de uso tópico con extractos de cannabis, formulado para integrarse a tu rutina de cuidado corporal después de la actividad diaria.',
    highlights: ['Uso tópico', 'Dos presentaciones', 'Elaborado en Colombia'],
    image: gel,
    imageLg: gelLg,
  },
  {
    id: 'full-spectrum-gel',
    name: 'Full Spectrum Gel',
    category: 'Gel de uso tópico',
    presentation: '125 g',
    usage: 'Uso tópico',
    composition: 'Espectro completo',
    description:
      'Gel de espectro completo en textura envolvente, pensado como parte de una rutina de cuidado corporal después del movimiento.',
    highlights: ['Espectro completo', 'Textura en gel', 'Elaborado en Colombia'],
    image: fullSpectrum,
    imageLg: fullSpectrumLg,
  },
  {
    id: 'massage-oil',
    name: 'Massage Oil',
    category: 'Aceite corporal',
    presentation: '250 ml',
    usage: 'Uso tópico · aplicación en masaje',
    composition: 'Extractos de cannabis',
    description:
      'Aceite corporal a base de extractos de cannabis, formulado especialmente para masajes y momentos de relajación.',
    highlights: ['Especial para masaje', 'Sensación envolvente', 'Elaborado en Colombia'],
    image: massageOil,
    imageLg: massageOilLg,
  },
  {
    id: 'shampoo-cbd',
    name: 'Shampoo CBD',
    category: 'Tratamiento capilar',
    presentation: '250 ml',
    usage: 'Uso capilar',
    composition: 'CBD · Quina · Cola de caballo',
    description:
      'Tratamiento capilar con extracto de quina, cola de caballo y aceite puro de CBD. Ayuda a controlar el frizz, hidrata y aporta brillo.',
    highlights: ['Con quina y cola de caballo', 'Libre de sal', 'Controla el frizz'],
    image: shampoo,
    imageLg: shampooLg,
  },
]
