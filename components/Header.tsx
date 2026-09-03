"use client";

import styles from "../styles/Header.module.css";
import { useRef, useState, useEffect } from "react";
import Social_media_phone from "./Social_media_phone";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface pageProps {
    knopka: boolean;
    setKnopka: Dispatch<SetStateAction<boolean>>;
    meregi: boolean;
    setMeregi: Dispatch<SetStateAction<boolean>>;
}

export default function Header ({setKnopka, knopka, setMeregi, meregi}: pageProps) {

    const [scrolled, setScrolled] = useState<boolean>(false);
    // const[knopka, setKnopka] = useState<boolean>(false);

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
                    <Link href='/pro-nas'>
                        <p>Про нас</p>
                    </Link>
                    <Link href='/teacher'>
                        <p>Педагоги</p>
                    </Link>
                    <Link href='/stuli'>
                        <p>Стилі</p>
                    </Link>
                </div>
                <Link className={styles.row_2} href='/'>
                    <img src="/Logotup.png" alt="" />
                </Link>
                <div className={styles.row_3}>
                    <Link href='/price'>
                        <p>Ціни</p>
                    </Link>
                    <Link href='/rozklad'>
                        <p>Розклад</p>
                    </Link>
                    <Link href='/blogu'>
                        <p>Блог</p>
                    </Link>
                </div>
            </div>
            <div className={styles.Header_Phone}>
                <Social_media_phone setMeregi={setMeregi} meregi={meregi} setKnopka={setKnopka}/>
                <Link href='/'>
                    <img className={styles.mini} src="/Logotup.png" alt="" />
                </Link>
                <div className={`${styles.hamMenu} ${knopka ? styles.active : ''}`} onClick={() => {
                    setKnopka(prev => !prev);
                    setMeregi(false);
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`${styles.menu} ${knopka ? styles.menu_ef : ''}`}>
                    <Link href='/pro-nas'>
                        <p>Про нас</p>
                    </Link>
                    <Link href='/teacher'>
                        <p>Педагоги</p>
                    </Link>
                    <Link href='/stuli'>
                        <p>Стилі</p>
                    </Link>
                    <Link href='/price'>
                        <p>Ціни</p>
                    </Link>
                    <Link href='/rozklad'>
                        <p>Розклад</p>
                    </Link>
                    <Link href='/blogu'>
                        <p>Блог</p>
                    </Link>
                </nav>
            </div>
        </div>
        
    )
}