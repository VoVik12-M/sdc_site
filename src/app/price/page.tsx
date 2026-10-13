"use client";

import Header from "../../../components/Header";
import Social_media from "../../../components/Social_media";
import Contactu from "../../../components/Contactu";
import Kabinet from "../../../components/Kabinet";

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
                        <div>
                            <p>Разове заняття</p>
                            <div>
                                <h2>300</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>1 година</h3>
                        </div>
                    </span>
                    <span>
                        <img src="./price/Light.png" alt="" />
                        <div>
                            <p>абонемент LIGHT</p>
                            <div>
                                <h2>850</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>4 години</h3>
                            <h6>Абонемент на 4 години, діє протягом 30 календарних днів з моменту покупки. Абонемент прив'язується до конкретної особи. Абонемент іменний та не підлягає передачі іншим особам. Абонемент не підлягає заморозці.</h6>
                        </div>
                    </span>
                    <span>
                        <img src="./price/standard.png" alt="" />
                        <div>
                            <p>абонемент STANDARD</p>
                            <div>
                                <h2>1300</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>8 годин</h3>
                            <h6>Абонемент на 8 годин, діє протягом 35 календарних днів з моменту покупки. Абонемент прив'язується до конкретної особи. Абонемент іменний та не підлягає передачі іншим особам. Абонемент не підлягає заморозці.</h6>
                        </div>
                    </span>
                    <span>
                        <img src="./price/strong.png" alt="" />
                        <div>
                            <p>абонемент STRONG</p>
                            <div>
                                <h2>1600</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>12 годин</h3>
                            <h6>Абонемент на 12 годин, діє протягом 35 календарних днів з моменту покупки. Абонемент прив'язується до конкретної особи. Абонемент іменний та не підлягає передачі іншим особам. Абонемент не підлягає заморозці.</h6>
                        </div>
                    </span>
                    <span>
                        <img src="./price/advanced.png" alt="" />
                        <div>
                            <p>абонемент ADVANCED</p>
                            <div>
                                <h2>2800</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>24 години</h3>
                            <h6>Абонемент на 24 години, діє протягом 45 календарних днів з моменту покупки. Абонемент прив'язується до конкретної особи. Абонемент іменний та не підлягає передачі іншим особам. Абонемент не підлягає заморозці.</h6>
                        </div>
                    </span>
                </div>
                <p>Індивідуальні тренування</p>
                <div className={style.induvu}>
                    <span>
                        <img src="./induvu/induvu_1.png" alt="" />
                        <div>
                            <p>1 учень 1 тренер</p>
                            <div>
                                <h2>900</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>1 година</h3>
                        </div>
                    </span>
                    <span>
                        <img src="./induvu/induvu_2_1.png" alt="" />
                        <div>
                            <p>2 учні 1 тренер</p>
                            <div>
                                <h2>1200</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>1 година</h3>
                        </div>
                    </span>
                    <span>
                        <img src="./induvu/induvu_2_2.png" alt="" />
                        <div>
                            <p>2 учнів 2 тренери</p>
                            <div>
                                <h2>1500</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>1 година</h3>
                        </div>
                    </span>
                </div>
                <p>Практики</p>
                <div className={style.practuca}>
                    <span>
                        <img src="./practuca/bachata.png" alt="" />
                        <div>
                            <div>
                                <h2>250</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>18.00-22.00</h3>
                            <h6>Практика відбувається в двох залах. Перший великий зал грає 3 Бачати / 2 Сальси а другий малий зал тільки Зук. Як завжди 20% всіх зібраних коштів з практики, йде на підтримку нашим захисникам.</h6>
                        </div>
                    </span>
                    <span>
                        <img src="./practuca/kizomba.png" alt="" />
                        <div>
                            <div>
                                <h2>200</h2>
                                <h5>грн</h5>
                            </div>
                            <h3>19.00-22.00</h3>
                            <h6>Практика відбувається в великому залі і грає суто Кізомба. Як завжди 20% всіх зібраних коштів з практики, йде на підтримку нашим захисникам.</h6>
                        </div>
                    </span>
                </div>
            </div>
            {width > 680 ? <Social_media /> : '' }
            <Kabinet />
            <Contactu />
        </div>
    )
}