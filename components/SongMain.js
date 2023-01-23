import React from 'react'
import { useState, useEffect } from 'react'
import  styles from "../styles/SongMain.module.css"
import Language from './Language';
import Lyrics from './Lyrics';
// import Transpose from './Transpose';
// import data from './Data';
import TransposeButtons from './TransposeButtons';


const SongMain = () => {
    const[toggleState, setToggleState]= useState(1);
    const toggleTab =(index)=>{
        setToggleState(index);
    }

  return (
    <>
        <div className={styles.master}>
        <div className={styles.tab_container}>
            <div className={styles.content}>
                <div className={styles.song_title}>
                    <h1 className={styles.h1}>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h1>
                </div>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <iframe className='iframe' width="100%" height="200" src="https://www.youtube.com/embed/M_tbpTCd4Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

                    </div>
                        <br/>
                        <br/>          
                    <div className={styles.right}>
                        <h3>
                            Worship Leaders - Prince Mulla, Zayvan & Sam AlexPasula 
                            <br/>
                            <br/>
                            Backing Vocals - Natalia Kashyap, Prakruthi Angelina,Rachel Francis, Philemon Anand & Rohan Mane 
                            <br/>
                            <br/>
                            Acoustic Guitars - Sabi T & Joel Udai 
                        </h3>
                       
                    </div>
                </div>
                {/* active-button */}
                <div className={styles.control}>
                    <button 
                        // className={toggleState ===1 ? "lyrics active_button" : "lyrics button"}
                        className={toggleState ===1 ? `${styles.chords} ${styles.active_button}` : `${styles.lyrics} ${styles.button}`}

                        onClick={()=> toggleTab(1)}    
                        >Chords
                    </button>
                    <button 
                        className={toggleState ===2 ? `${styles.lyrics} ${styles.active_button}` : `${styles.lyrics} ${styles.button}`}

                        onClick={()=> toggleTab(2)}
                        >Lyrics
                    </button>
                    <button 
                        className={toggleState ===3 ? `${styles.hindi} ${styles.active_button}` : `${styles.hindi} ${styles.button}`}

                        onClick={()=> toggleTab(3)}
                        >Hindi
                    </button>
                </div>

                {/* <div className={toggleState ===1 ? "box1 active" : "box1"}> */}
                <div className={toggleState ===1 ? `${styles.box1} ${styles.active}` : `${styles.box1}`}>
                    <br/>
                    <TransposeButtons/>            
                </div>
                {/* <div className={toggleState ===2 ? "box2 active" : "box2"}> */}
                <div className={toggleState ===2 ? `${styles.box2} ${styles.active}` : `${styles.box2}`}>
                    <Lyrics/>
                </div>
                {/* <div className={toggleState ===3 ? "box3 active" : "box3"}> */}
                <div className={toggleState ===3 ? `${styles.box3} ${styles.active}` : `${styles.box3}`}>
                    <Language/>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SongMain