"use client";

import styles from "../styles/Header.module.css";

export default function Header () {
    return (
        <div className={styles.Header}>
            <div>
                <p>Про нас</p>
                <p>Педагоги</p>
                <p>Стилі</p>
            </div>
            <img src="/Logotup.png" alt="" />
            <div>
                <p>Ціни</p>
                <p>Розклад</p>
                <p>Блог</p>
            </div>
        </div>
    )
}