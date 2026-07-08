"use client";

import styles from "../styles/Social_media.module.css"
import { useRef, useState } from "react";

export default function Social_media () {
    
    const efectu = useRef<HTMLDivElement>(null);
    const efectu2 = useRef<HTMLDivElement>(null);

    return (
        <div>
            <div ref={efectu} className={styles.ramka}
            onMouseEnter={() =>{
                efectu.current?.classList.add(styles.efect),
                efectu2.current?.classList.add(styles.efecttext)
            }}
            onMouseLeave={() => {
                efectu.current?.classList.remove(styles.efect)
                // efectu2.current?.classList.remove(styles.efecttext)
            }}>
            </div>
            <div className={styles.icon}>
                <p ref={efectu2}>Social Media</p>
            </div>
        </div>
    )
}