export const invitation = {
  bride: 'Shairra',
  groom: 'Gregory',
  couple: 'Shairra & Gregory',
  brideFull: 'Shairra Mae Pablo Aleonar',
  groomFull: 'Gregory Junn Serisola Namoc',
  date: new Date('2026-10-17T14:00:00+08:00'),
  dateLabel: 'Saturday, October 17, 2026',
  dateShort: '10.17.26',
  tagline:
    'We warmly invite you to witness our wedding ceremony and share in our happiness.',
  inviteLine: 'You are warmly invited to celebrate our wedding',
  ceremony: {
    title: 'Ceremony',
    time: '2:00 PM',
    place: 'Nuestra Sra. Maria De La Candelaria',
    address: 'Tagoloan, Misamis Oriental',
    image: '/photos/church.jpg',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Nuestra+Sra.+Maria+De+La+Candelaria+Parish+Tagoloan+Misamis+Oriental',
    mapEmbed:
      'https://maps.google.com/maps?q=Nuestra+Sra.+Maria+De+La+Candelaria+Parish+Poblacion+Tagoloan+Misamis+Oriental&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  reception: {
    title: 'Reception',
    time: 'To follow',
    place: 'Marco Hotel',
    address: 'Alwana Business Park, Cugman, Cagayan de Oro City',
    image: '/photos/marco-hotel.jpg',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Marco+Hotel+Cugman+Cagayan+de+Oro',
    mapEmbed:
      'https://maps.google.com/maps?q=Marco+Hotel+Alwana+Business+Park+Cugman+Cagayan+de+Oro&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  timeline: [
    {
      time: '2:00 PM',
      label: 'Wedding Ceremony',
      detail: 'Nuestra Sra. Maria De La Candelaria, Tagoloan',
    },
    {
      time: 'To follow',
      label: 'Reception',
      detail: 'Marco Hotel, Cugman, Cagayan de Oro City',
    },
  ],
  dressCode: 'Formal',
  seatingNote:
    'We respectfully request no plus ones, as seating is limited. Thank you for your understanding and cooperation.',
  rsvpDeadline: 'September 20, 2026',
  heroImage: '/photos/hero.jpg',
  atmosphereImage: '/photos/atmosphere.jpg',
} as const

export function calendarUrl() {
  const start = '20261017T060000Z'
  const end = '20261017T140000Z'
  const text = encodeURIComponent(`Wedding of ${invitation.couple}`)
  const details = encodeURIComponent(
    `${invitation.ceremony.place} · ${invitation.reception.place}`
  )
  const location = encodeURIComponent(invitation.ceremony.address)
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`
}
