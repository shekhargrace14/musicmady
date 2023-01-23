import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SongMain from '../components/SongMain'
import Card1x3 from '../components/Card1x3'

const SongPage = () => {
  return (
    <>
        <Navbar/>
        <SongMain/>
        <Card1x3/>
        <Footer/>
    </>
  )
}

export default SongPage