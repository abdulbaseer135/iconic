import React from 'react'
import Follow from '../Follow/Follow'
import Services from '../Services/Services'
import CEOMessage from './Ceo/CEOMessage'

const Home = () => {
  return (
    <div>
      <CEOMessage />
      <Services />
      <Follow />
    </div>
  )
}

export default Home
