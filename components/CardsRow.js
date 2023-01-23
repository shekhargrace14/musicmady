import React from 'react'
import Card from './Card'
import SongData from './SongData'

const CardsRow = () => {
  return (
    <div>
        <Card 
            video={SongData[0].video}
            title={SongData[0].title}
            description={SongData[0].description}
            lyrics={SongData[0].lyrics}
            language={SongData[0].language}



        />
    </div>
  )
}

export default CardsRow