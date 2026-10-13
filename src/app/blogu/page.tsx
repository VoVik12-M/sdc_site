"use client";

import Header from "../../../components/Header"
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";
import Kabinet from "../../../components/Kabinet";

// ___________________сторінки______________________________
import Pag_one from "./Pag_one";
import Pag_two from "./Pag_two";
import Pag_three from "./Pag_three";
import Pag_four from "./Pag_four";
import Pag_five from "./Pag_five";
import Pag_six from "./Pag_six";
// _________________________________________________________

import style from "./blogu.module.css"

import { useRef, useState, useEffect } from "react";

export default function Blog() {

    let left:string = "<<";
    let right:string = ">>";

    const [width, setWidth] = useState<number>(0);
    const[knopka, setKnopka] = useState<boolean>(false);
    const[meregi, setMeregi] = useState<boolean>(false);

    // ________________кнопки____________________________

    const [cnopka, setCnopka] = useState<number>(1);
    // __________________________________________________

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
                <p>Блог</p>
                <p>Питання і відповіді</p>
            </div>
            <div className={style.blog}>
                {cnopka === 1 ? <Pag_one /> : ""}
                {cnopka === 2 ? <Pag_two /> : ""}
                {cnopka === 3 ? <Pag_three /> : ""}
                {cnopka === 4 ? <Pag_four /> : ""}
                {cnopka === 5 ? <Pag_five /> : ""}
                {cnopka === 6 ? <Pag_six /> : ""}
                <div className={style.knopku}>
                    <p className={cnopka > 1 ? "" : style.live} onClick={()=>setCnopka(cnopka-1)}>{left}</p>
                    <p className={cnopka === 1 ? style.odun : ''} onClick={()=>setCnopka(1)}>1</p>
                    <p className={cnopka === 2 ? style.dva : ''} onClick={()=>setCnopka(2)}>2</p>
                    <p className={cnopka === 3 ? style.tru : ''} onClick={()=>setCnopka(3)}>3</p>
                    <p className={cnopka === 4 ? style.choturu : ''} onClick={()=>setCnopka(4)}>4</p>
                    <p className={cnopka === 5 ? style.piat : ''} onClick={()=>setCnopka(5)}>5</p>
                    <p className={cnopka === 6 ? style.shist : ''} onClick={()=>setCnopka(6)}>6</p>
                    <p className={cnopka < 6 ? "" : style.prave} onClick={()=>setCnopka(cnopka+1)}>{right}</p>
                </div>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <Kabinet />
            <Contactu />
        </div>
    )
}