import Link from 'next/link'
import React from 'react'
import styles from "../styles/Card1x3.module.css"

const Card = (props) => {
  return (
    <>
      <Link href="SongPage">
        <div className={styles.card}>
            <div className={styles.img_box}>
                <iframe className={styles.iframe} width="100%" height="200" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

            </div>
            <div className={styles.info}>
                <h4 className={styles.h4}>{props.title}</h4>
                <p className={styles.song_info}>{props.description} </p>
                <p className={styles.discription}>{props.lyrics} </p>
                <p className={styles.discription}>{props.language} </p>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card