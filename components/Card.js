import Link from 'next/link'
import React from 'react'
import styles from "../styles/Card1x3.module.css"

const Card = () => {
  return (
    <>
      <Link href="SongPage">
        <div className={styles.card}>
            <div className={styles.img_box}>
                <iframe className={styles.iframe} width="100%" height="200" src="https://www.youtube.com/embed/M_tbpTCd4Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

            </div>
            <div className={styles.info}>
                <h4 className={styles.h4}>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h4>
                <p className={styles.song_info}>Worship Leaders - Prince Mulla, Zayvan & Sam AlexPasula </p>
                <p className={styles.discription}>INTRO VERSE 1: Tujhe chhod mein chal padaDhundne ghar har jagah Khoj me mein kho gaya Khud ko pehchan na saka </p>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card