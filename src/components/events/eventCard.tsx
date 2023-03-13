import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EventCard({ ev }: any) {
  return (
    <Link href={`/events/${ev.city}/${ev.id}`} className="card">
      <Image src={ev.image} alt={ev.title} width="400" height={200} />
      <h2>{ev.title}</h2>
      <p>{ev.description}</p>
    </Link>
  )
}

export default EventCard