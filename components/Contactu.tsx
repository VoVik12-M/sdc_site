"use client";

import styles from "../styles/Contactu.module.css";

export default function Contactu () {
    return (
        <nav className={styles.cont}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.96004108202396!2d25.595904321246127!3d49.557554317898244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303158c12d194b%3A0x4113eeb4b1b14541!2zU29jaWFsIERhbmNlIENsdWIg0KLQtdGA0L3QvtC_0ZbQu9GMIC0g0YjQutC-0LvQsCDRgtCw0L3RhtGW0LI!5e1!3m2!1suk!2sua!4v1786021578906!5m2!1suk!2sua"
                width="600"
                height="450"
                allowFullScreen 
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
            <div className={styles.adres}>
                <p>Адреса</p>
                <p>м.Тернопіль вул.Крушельницька 18, 46001</p>
            </div>
            <div className={styles.tel}>
                <p>Тел і пошта</p>
                <p>097 413 4116</p>
                <a href="mailto:sdcter@gmail.com">sdcter@gmail.com</a>
            </div>
        </nav>
    )
}