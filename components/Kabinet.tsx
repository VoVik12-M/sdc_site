"use client";

import style from "../styles/Kabinet.module.css";

export default function Kabinet () {
    return (
        <div className={style.kab}>
            <img className={style.img_one} src="./vhid.png" alt="" />
            {/* <img className={style.img_two} src="./client.png" alt="" /> */}
        </div>
    )
}