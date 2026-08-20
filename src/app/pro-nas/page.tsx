"use client";

import Header from "../../../components/Header"
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";

import style from './pro_nas.module.css'


import { useRef, useState, useEffect } from "react";

export default function Pronas () {

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
            {/* <img className="fon " src="/pro_nas.png" alt="" /> */}
            <div className={style.fon}>
                <p>Про нас</p>
                <p>Студія танців "Social dance club" м.Тернопіль</p>
            </div>
            <div className={style.opus}>
                <h1>
                    <b>Танці</b> – це поклик душі, це пристрасть, що втілюється в гармонійних рухах двох партнерів. Здавна танці <br />
                    вважалися одним зі способів проявити почуття, показати свою прихильність.<br /><br />

                    <b>«Social Dance Club»</b> — перша студія соціальних танців. В соціальних танцях не важливий вік, комплектація,<br />
                    професія, стать та національність. Потрібне лише бажання та мотивація, саме тоді вже за декілька місяців ви<br />
                    зможете застосувати уміння на вечірках, фестивалях та танцювальних вечорах, які ми регулярно організовуємо.<br /><br />

                    <b>Навчаємо:</b>
                    <ul>
                        <li>сальса;</li>
                        <li>сальса соло (чоловічий та жіночий стиль);</li>
                        <li>бачата;</li>
                        <li>кізомба;</li>
                        <li>руеда де кабіно;</li>
                        <li>бразильський зук.</li>
                    </ul>

                    Вас навчатимуть кращі викладачі, люди, які усім серцем, усією душею люблять танці, й стараються поширювати<br />
                    це мистецтво серед людей.<br /><br />

                    <b>Переваги:</b>
                    <ul>
                        <li>організація різноманітних вечірок для всіх учасників;</li>
                        <li>привітне та дружнє ставлення;</li>
                        <li>професійна команда викладачів;</li>
                        <li>просторі та затишні танцювальні зали;</li>
                        <li>немає жодних обмежень по віку та інших особливостей.</li>
                    </ul>
                </h1>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <Contactu />
        </div>
    )
}