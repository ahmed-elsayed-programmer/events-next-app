import React from 'react'
import EventCard from './eventCard'

function CatEvent({ data, PageName }: any) {
  return (
    <div className='cat_events'>
      <h1>Events in {PageName}</h1>
      <div className='content'>
        {data.map((ev: any) => <EventCard ev={ev} key={ev.id} />)}
      </div>
    </div>
  )
}

export default CatEvent