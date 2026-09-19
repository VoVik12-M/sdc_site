"use client";

import style from "../styles/Kabinet.module.css";
import Link from "next/link";

export default function Kabinet () {
    return (
        <div className={style.kab}>
            <Link href='/register'>
                <img className={style.img_one} src="./vhid.png" alt="" />
            </Link>
            {/* <img className={style.img_two} src="./client.png" alt="" /> */}
        </div>
    )
}