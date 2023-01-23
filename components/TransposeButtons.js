import React from 'react'
import styles from "../styles/Transpose.module.css";
import { useState } from "react";
// import data from './Data';
import Transpose from '../components/Transpose';
const TransposeButtons =() => {

    const [value, setValue] = useState(1);
   

    const buttonClick = (index) => {
      setValue(index);
    };
  return (
    <div>
        <div className={styles.transpose_box}>
            <div className={styles.transpose}>
                {/* <button className={styles.transpose_Btn} onClick={buttonClick1} value="0">C</button> */}
                <button className={value === 0 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(0)} value="0">C</button>
                <button className={value === 1 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(1)} value="1">C#</button>
                <button className={value === 2 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(2)} value="2">Db</button>
                <button className={value === 3 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(3)} value="3">D</button>
                <button className={value === 4 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(4)} value="4">D#</button>
                <button className={value === 5 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(5)} value="5">Eb</button>
                <button className={value === 6 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(6)} value="6">E</button>
                <button className={value === 7 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(7)} value="7">F</button>
                <button className={value === 8 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(8)} value="8">F#</button>
                <button className={value === 9 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(9)} value="9">Gb</button>
                <button className={value === 10 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(10)} value="10">G</button>
                <button className={value === 11 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(11)} value="11">G#</button>
                <button className={value === 12 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(12)} value="12">Ab</button>
                <button className={value === 13 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(13)} value="13">A</button>
                <button className={value === 14 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(14)} value="14">A#</button>
                <button className={value === 15 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(15)} value="15">Bb</button>
                <button className={value === 16 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(16)} value="16">B</button>
            </div>
        </div>
        <Transpose value={value}/>
    </div>
  )
}

export default TransposeButtons;