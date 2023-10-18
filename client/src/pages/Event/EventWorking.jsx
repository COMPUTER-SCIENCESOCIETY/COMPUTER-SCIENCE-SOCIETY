import React from 'react'
import EventGo from '../../components/EventComponents/EventGo'
import { Helmet } from 'react-helmet-async'

const EventWorking = () => {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>CSS Events</title>
        <meta name="whatever" value="notImportant" />
        <meta property="og:title" content="CSS Events Page" />
      </Helmet>
        <EventGo/>
    </div>
  )
}

export default EventWorking