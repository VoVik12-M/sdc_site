"use client";

import Header from "../../../components/Header";
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";
import Kabinet from "../../../components/Kabinet";

import style from "./teacher.module.css"

import { useRef, useState, useEffect } from "react";

export default function Teacher () {

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
                <p>Наша команда</p>
                <p>Познайомтесь з людьми, які вкладають душу в танець</p>
            </div>
            <div className={style.teach}>
                <span>
                    <p>Людмила Сідловська</p>
                    <img src="./foto/Mila.png" alt="" />
                    <p>Бачата Сальса</p>
                </span>
                <span>
                    <p>Андрій Шкільний</p>
                    <img src="./foto/Andriy_schil.png" alt="" />
                    <p>Бачата</p>
                </span>
                <span>
                    <p>Костя Валігура</p>
                    <img src="./foto/Cost_val.png" alt="" />
                    <p>Бачата Сальса Зук</p>
                </span>
                <span>
                    <p>Діана Валігура</p>
                    <img src="./foto/Dian_val.png" alt="" />
                    <p>Бачата Сальса Зук</p>
                </span>
                <span>
                    <p>Світла Голінська</p>
                    <img src="./foto/Goli.png" alt="" />
                    <p>Кізомба</p>
                </span>
                <span>
                    <p>Ігор Голінський</p>
                    <img src="./foto/Ihor_gol.png" alt="" />
                    <p>Кізомба</p>
                </span>
                <span>
                    <p>Ірина Ковальчук</p>
                    <img src="./foto/Ira_kov.png" alt="" />
                    <p>Кізомба</p>
                </span>
                <span>
                    <p>Леся Корнак</p>
                    <img src="./foto/Lesa.png" alt="" />
                    <p>Бачата Сальса</p>
                </span>
                <span>
                    <p>Люба Канюга</p>
                    <img src="./foto/Luba_kan.png" alt="" />
                    <p>Кізомба</p>
                </span>
                <span>
                    <p>Марія Васильчук</p>
                    <img src="./foto/Masha.png" alt="" />
                    <p>Зук</p>
                </span>
                <span>
                    <p>Наталя Юрдига</p>
                    <img src="./foto/Nat_yrd.png" alt="" />
                    <p>Бачата Сальса</p>
                </span>
                <span>
                    <p>Саша Яблонський</p>
                    <img src="./foto/Olecs_abl.png" alt="" />
                    <p>Бачата Сальса</p>
                </span>
                <span>
                    <p>Сергій Козак</p>
                    <img src="./foto/Sergiy.png" alt="" />
                    <p>Бачата Сальса</p>
                </span>
                <span>
                    <p>Юра Вербовецький</p>
                    <img src="./foto/Yra_verb.png" alt="" />
                    <p>Зук Кізомба</p>
                </span>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <Kabinet />
            <Contactu />
        </div>
    )
}