import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AllEvents({ data }: any) {
  return (
    <div className='events_page'>
      {
        data.map((ev: any) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="card">
            <Image src={ev.image} width={500} height={500} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))
      }
    </div>
  )
}

export default AllEvents