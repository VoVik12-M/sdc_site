"use client";

import styles from "../styles/Social_media_phone.module.css"
import { useRef, useState } from "react";

export default function Social_media_phone () {

    const[meregi, setMeregi] = useState<boolean>(false);

    return (
        <nav className={styles.soc} onClick={() => setMeregi(prev =>!prev)}>
            {!meregi ? <p>Social Media</p> :
                <div className={styles.ikc}>
                    <div></div>
                    <div></div>
                </div> }
            <div className={`${styles.media} ${meregi ? styles.media_ef : ''}`}>
                <a href="https://www.instagram.com/sdcternopil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="" />
                </a>
                <a href="https://www.threads.com/@sdcternopil/media?xmt=AQG07gTh5MOTRnB4oDiL86kqkVgn0NG-jAGHQMHY_2rFVio" target="_blank" rel="noopener noreferrer">
                    <img src="/threads.png" alt="" />
                </a>
                <a href="https://t.me/sdcternopilnews" target="_blank" rel="noopener noreferrer">
                    <img src="/telegram.png" alt="" />
                </a>
                <a href="https://www.tiktok.com/@sdc.ternopil?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                    <img src="/tiktok.png" alt="" />
                </a>
                <a href="https://youtube.com/@sdcternopil?si=espXzRPDwWHHSbxY" target="_blank" rel="noopener noreferrer">
                    <img src="/youtube.png" alt="" />
                </a>
            </div>
        </nav>
    )
}