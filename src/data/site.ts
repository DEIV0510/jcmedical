export const SITE = {
  name: 'JC Medical Corp SAS',
  shortName: 'JC Medical Corp',
  url: 'https://jcmedicalcorp.com/',
  email: 'saludyvida@jcmedicalcorp.com',
  address: 'Calle 19 # 5-93, Local 205, Centro Comercial Monserrate, Bogotá, Colombia',
  addressShort: 'C.C. Monserrate, Local 205 · Bogotá, Colombia',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Centro Comercial Monserrate, Calle 19 #5-93, Local 205, Bogotá, Colombia'),
  whatsapp: {
    primary: { display: '+57 322 727 9186', e164: '573227279186' },
    secondary: { display: '+57 322 271 4055', e164: '573222714055' },
  },
  social: {
    instagram: 'https://www.instagram.com/jc_medical_corp?stkn=aWdhbnRnczg1NXA5',
    facebook: 'https://www.facebook.com/share/1Evd7Cfmfz/',
    youtube: 'https://youtube.com/@jcmedicalcorpsas?si=B3Qnd1j20ZXiQ-hV',
    tiktok: 'https://www.tiktok.com/@jcm3dical?_r=1&_t=ZS-99g3cOS2cqe',
    google: 'https://share.google/aPsGwGSQS5uONEDv8',
  },
} as const

function waLink(e164: string, message: string) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`
}

export const WA = {
  advisor: waLink(
    SITE.whatsapp.primary.e164,
    'Hola, quisiera conocer el portafolio de productos de JC Medical Corp SAS y recibir asesoría.'
  ),
  product: (name: string) =>
    waLink(
      SITE.whatsapp.primary.e164,
      `Hola, estoy interesado en conocer el producto ${name} de JC Medical Corp SAS. ¿Me pueden brindar información sobre disponibilidad, presentación y precio?`
    ),
  investors: waLink(
    SITE.whatsapp.primary.e164,
    'Hola, quisiera conocer las oportunidades de participación y el proyecto de JC Medical Corp SAS.'
  ),
  investorsAdvisor: waLink(
    SITE.whatsapp.primary.e164,
    'Hola, quisiera hablar con un asesor comercial de JC Medical Corp SAS.'
  ),
  general: waLink(SITE.whatsapp.primary.e164, 'Hola, quisiera más información sobre JC Medical Corp SAS.'),
  primaryNumber: waLink(SITE.whatsapp.primary.e164, 'Hola, quisiera más información sobre JC Medical Corp SAS.'),
  secondaryNumber: waLink(SITE.whatsapp.secondary.e164, 'Hola, quisiera más información sobre JC Medical Corp SAS.'),
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#calidad', label: 'Calidad y cultivo' },
  { href: '#proyeccion', label: 'Proyección internacional' },
  { href: '#inversionistas', label: 'Inversionistas' },
  { href: '#contacto', label: 'Contacto' },
] as const
