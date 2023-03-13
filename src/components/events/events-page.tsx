import React from 'react'
import AllEvents from './allEvents'


function EventsPage({ data }: any) {
  return (
    <div >
      <h1>Event Page</h1>
      <AllEvents data={data} />
    </div>
  )
}

export default EventsPage