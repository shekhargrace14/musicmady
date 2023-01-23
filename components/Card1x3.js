import React from 'react'
import styles from "../styles/Card1x3.module.css"
import Card from './Card'
import SongData from "./SongData";

// const passData =(val)=>{
//     return(
//         <Card
//         title={val.title}
//         singer={val.title}
//         youtube={val.title}
//         lyrics={val.title}
//         /> 
//     )

// }

const Card1x3 = () => {
    
  return (
    <>

        <div className={styles.main}>   
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}

export default Card1x3