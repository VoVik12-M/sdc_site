"use client";

import styles from "../styles/Header.module.css";

export default function Header () {
    return (
        <div>
            <div className={styles.Header}>
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

            </div>
        </div>
        
    )
}