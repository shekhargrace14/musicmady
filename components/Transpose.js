import React,{useState, useEffect} from 'react';
import styles from "../styles/Transpose.module.css";
import Data from './Data';


const Transpose = (props) => {
        
        
    return (

        <>
            <br/>
            <br/>
            <h2>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h2>

                <br/>
                <br/>
            <br/>
            <h2>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h2>
                    <p>Key:{Data[props.value].i}</p>
                    <br/>
                    <p>
                    {/* <p className={styles.p}> */}
                    <pre>

                        INTRO: {Data[props.value].i} {Data[props.value].xxi}  {Data[props.value].xxviii} {Data[props.value].xxviii} (x 2)
                        <br/>                   
                        <br/>                    
                        VERSE 1:
                        <br/>   
                        {Data[props.value].i}      {Data[props.value].xxi}         {Data[props.value].xxviii}
                        

                        <br/>                    
                        Tujhe chhod mein chal pada
                        <br/>                    
                        {Data[props.value].i}      {Data[props.value].xxi}         {Data[props.value].xxviii}

                        <br/>                    
                        Dhundne ghar har jagah
                        <br/>                    
                        {Data[props.value].i}      {Data[props.value].xxi}         {Data[props.value].xxviii}

                        <br/>                    
                        Khoj me mein kho gaya
                        <br/>                    
                        {Data[props.value].i}      {Data[props.value].xxi}         {Data[props.value].xxviii}

                        <br/>                    
                        Khud ko pehchan na saka
                        <br/>                    
                        <br/>                 
                    </pre>    

                    </p>

        </>
    )
}

export default Transpose;