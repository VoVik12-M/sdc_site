"use client";

import Header from "../../../components/Header"
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";
import Kabinet from "../../../components/Kabinet";

import { useRef, useState, useEffect } from "react";

import style from "./rozklad.module.css"

export default function Rozklad () {

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
                <p>Розклад занять</p>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <div className={style.kalendar}>
                <div className={style.monday}>
                    <span>
                        <p>Понеділок</p>
                    </span>
                    <div>
                        <p>Бачата</p>
                        <p>18:30-20:30</p>
                        <p>Початковий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Костя і Діана</p>
                    </div>
                    <div>
                        <p>Бачата + Сальса</p>
                        <p>19.00-21.00</p>
                        <p>Високий рівень</p>
                        <p>БП "Роксолана"</p>
                        <p>Юра і Міла</p>
                    </div>
                </div>
                <div className={style.tuesday}>
                    <span>
                        <p>Вівторок</p>
                    </span>
                    <div>
                        <p>Зук</p>
                        <p>18.45-19.45</p>
                        <p>Високий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Діана і Костя</p>
                    </div>
                    <div>
                        <p>Бачата</p>
                        <p>20.00-22.00</p>
                        <p>Високий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Діана і Костя</p>
                    </div>
                </div>
                <div className={style.wednesday}>
                    <span>
                        <p>Середа</p>
                    </span>
                    <div>
                        <p>Зук</p>
                        <p>18.30-20.30</p>
                        <p>Початковий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Діана і Костя</p>
                    </div>
                    <div>
                        <p>Сальса 2</p>
                        <p>20.30-21.30</p>
                        <p>Середній рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Діана і Костя</p>
                    </div>
                    <div>
                        <p>Бачата + Сальса</p>
                        <p>19.00-21.00</p>
                        <p>Початковий рівень</p>
                        <p>БП "Роксолана"</p>
                        <p>Леся і Сергій</p>
                    </div>
                </div>
                <div className={style.thursday}>
                    <span>
                        <p>Четвер</p>
                    </span>
                    <div>
                        <p>Бачата</p>
                        <p>19.00-21.00</p>
                        <p>Початковий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Андрій і Наталя</p>
                    </div>
                    <div>
                        <p>Леді Кіз</p>
                        <p>21.00-22.00</p>
                        <p>Середній рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Іринка</p>
                    </div>
                </div>
                <div className={style.friday}>
                    <span>
                        <p>П'ятниця</p>
                    </span>
                    <div>
                        <p>Бачата + Сальса</p>
                        <p>18.45-20.45</p>
                        <p>Високий рівень</p>
                        <p>БП "Роксолана"</p>
                        <p>Леся і Сергій</p>
                    </div>
                    <div>
                        <p>Кізомба</p>
                        <p>18.45-19.45</p>
                        <p>Середній рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Ігор і Світлана</p>
                    </div>
                    <div>
                        <p>Кізомба</p>
                        <p>19.45-20.45</p>
                        <p>Високий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Ігор і Світлана</p>
                    </div>
                </div>
                <div className={style.saturday}>
                    <span>
                        <p>Субота</p>
                    </span>
                    <div>
                        <p>Зук</p>
                        <p>11.00-13.00</p>
                        <p>Початковий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Марія і Юра</p>
                    </div>
                    <div>
                        <p>Бачата</p>
                        <p>13.00-15.00</p>
                        <p>Середній рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Андрій і Наталя</p>
                    </div>
                    <div>
                        <p>Леді Стайл</p>
                        <p>17.00-18.00</p>
                        <p>Високий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Діана</p>
                    </div>
                </div>
                <div className={style.sunday}>
                    <span>
                        <p>Неділя</p>
                    </span>
                    <div>
                        <p>Кізомба</p>
                        <p>16.00-17.00</p>
                        <p>Початковий рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Люба і Юра</p>
                    </div>
                    <div>
                        <p>Кізомба</p>
                        <p>17.00-19.00</p>
                        <p>Середній рівень</p>
                        <p>вул.Крушельницька</p>
                        <p>Люба і Юра</p>
                    </div>
                </div>
            </div>
            <Kabinet />
            <Contactu />
        </div>
    )
}