"use client";

import styles from "../styles/Header.module.css";
import { useRef, useState, useEffect } from "react";

export default function Header () {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const[knopka, setKnopka] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`${styles.Header} ${scrolled ? styles.headerScroll : ""}`}>
                <div className={styles.row_1}>
                    <p>Про нас</p>
                    <p>Педагоги</p>
                    <p>Стилі</p>
                </div>
                <img className={styles.row_2} src="/Logotup.png" alt="" />
                <div className={styles.row_3}>
                    <p>Ціни</p>
                    <p>Розклад</p>
                    <p>Блог</p>
                </div>
            </div>
            <div className={styles.Header_Phone}>
                <nav className={styles.soc}></nav>
                <img className={styles.row_2} src="/Logotup.png" alt="" />
                <div className={`${styles.hamMenu} ${knopka ? styles.active : ''}`} onClick={() => setKnopka(prev => !prev)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        
    )
}