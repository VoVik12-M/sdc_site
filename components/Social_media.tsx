"use client";

import styles from "../styles/Social_media.module.css"
import { useRef, useState } from "react";

export default function Social_media () {
    
    const efectu = useRef<HTMLDivElement>(null);
    const efectu2 = useRef<HTMLDivElement>(null);

    const [ramkaX, setRamkaX] = useState<boolean>(false)
    
    return (
        <div>
            <div ref={efectu} className={!ramkaX ? styles.ramka : styles.ramkaX}
            onMouseMove={() =>{
                efectu.current?.classList.add(styles.efect);
                efectu2.current?.classList.add(styles.efecttext)
            }}
            onMouseLeave={() => {
                efectu.current?.classList.remove(styles.efect);
                efectu2.current?.classList.remove(styles.efecttext)
            }}
            onClick={() => {
                setRamkaX(prev=>!prev)
            }}
            >
            </div>
            <div className={!ramkaX ? styles.icon:styles.iconX}>
                {!ramkaX ? 
                <p ref={efectu2}>Social Media</p> :
                <div>
                    <div></div>
                    <div></div>
                </div>
                }
            </div>
            <a href="https://www.instagram.com/sdcternopil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <img className={`${styles.media} ${ramkaX ? styles.instagram : ""}`} src="/instagram.png" alt="" />
            </a>
            <a href="https://www.threads.com/@sdcternopil/media?xmt=AQG07gTh5MOTRnB4oDiL86kqkVgn0NG-jAGHQMHY_2rFVio" target="_blank" rel="noopener noreferrer">
                <img className={`${styles.media} ${ramkaX ? styles.threads : ""}`} src="/threads.png" alt="" />
            </a>
            <a href="https://t.me/sdcternopilnews" target="_blank" rel="noopener noreferrer">
                <img className={`${styles.media} ${ramkaX ? styles.telegram : ""}`} src="/telegram.png" alt="" />
            </a>
            <a href="https://www.tiktok.com/@sdc.ternopil?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <img className={`${styles.media} ${ramkaX ? styles.tiktok : ""}`} src="/tiktok.png" alt="" />
            </a>
            <a href="https://youtube.com/@sdcternopil?si=espXzRPDwWHHSbxY" target="_blank" rel="noopener noreferrer">
                <img className={`${styles.media} ${ramkaX ? styles.youtube : ""}`} src="/youtube.png" alt="" />
            </a>
        </div>
    )
}