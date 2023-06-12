import React from 'react'
import EventGo from '../../components/EventComponents/EventGo'
import { Helmet } from 'react-helmet-async'

const EventWorking = () => {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>ITS Events</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="Information technology Society Home Page" />
      </Helmet>
        <EventGo/>
    </div>
  )
}

export default EventWorking