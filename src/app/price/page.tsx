"use client";

import Header from "../../../components/Header";
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";

import { useRef, useState, useEffect } from "react";

import style from "./price.module.css";

export default function Price() {

    const [width, setWidth] = useState<number>(0);
    const[knopka, setKnopka] = useState<boolean>(false);
    const[meregi, setMeregi] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize(); // Отримати розмір одразу після завантаження

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Header setKnopka ={setKnopka} knopka = {knopka} setMeregi={setMeregi} meregi={meregi}/>
            <div className={style.fon}>
                <p>Ціни на абонементи</p>
            </div>
            <div className={style.cina}>
                <p>Прайс</p>
                <div className={style.prices}>
                    <span>
                        <img src="./price/razove.png" alt="" />
                    </span>
                    <span>
                        <img src="./price/Light.png" alt="" />
                    </span>
                </div>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <Contactu />
        </div>
    )
}