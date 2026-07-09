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
        </div>
    )
}