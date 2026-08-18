"use client";

import styles from "../styles/Nowunu.module.css"

import { useRef, useState } from "react";

import New_one from "./Nowunu_akchii/New_one";
import New_two from "./Nowunu_akchii/New_two";
import New_three from "./Nowunu_akchii/New_three";
import New_four from "./Nowunu_akchii/New_four";
import New_five from "./Nowunu_akchii/New_five";
import Akchia_one from "./Nowunu_akchii/Akchia_one";

export default function Nowunu () {

    const[news1, setNews1] = useState(false);
    const[news2, setNews2] = useState(false);
    const[news3, setNews3] = useState(false);
    const[news4, setNews4] = useState(false);
    const[news5, setNews5] = useState(false);
    const[news6, setNews6] = useState(false);

    return (
        <nav className={styles.New}>
            <p>Новини</p>
            <div className={styles.Novunu}>
                <div className={news1 ? styles.activeNews : ""} onClick={()=> setNews1(true)}>
                    <span
                        className={news1? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews1(false);
                        }}>
                            <img src="/Screenshot_1.png" alt="" />
                            <New_one />
                    </span>
                </div>
                <div className={news2 ? styles.activeNews : ""} onClick={()=> setNews2(true)}>
                    <span
                        className={news2? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews2(false);
                        }}>
                            <img src="/Screenshot_2.png" alt="" />
                            <New_two />
                    </span>
                </div>
                <div className={news3 ? styles.activeNews : ""} onClick={()=> setNews3(true)}>
                    <span
                        className={news3? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews3(false);
                        }}>
                            <img src="/Screenshot_3.png" alt="" />
                            <New_three />
                    </span>
                </div>
                <div className={news4 ? styles.activeNews : ""} onClick={()=> setNews4(true)}>
                    <span
                        className={news4? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews4(false);
                        }}>
                            <img src="/Screenshot_4.png" alt="" />
                            <New_four />
                    </span>
                </div>
                <div className={news5 ? styles.activeNews : ""} onClick={()=> setNews5(true)}>
                    <span
                        className={news5? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews5(false);
                        }}>
                            <img src="/Screenshot_5.png" alt="" />
                            <New_five />
                    </span>
                </div>
            </div>
            <p>Акції</p>
            <div className={styles.Acvhii}>
                <div className={news6 ? styles.activeAct : ""} onClick={()=> setNews6(true)}>
                    <span
                        className={news6? styles.new : styles.del}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews6(false);
                        }}>
                            <img src="/Screenshot_6.png" alt="" />
                            <Akchia_one />
                    </span>
                </div>
            </div>
            <h1>Для військових діє знижка -20% на абонементи</h1>
        </nav>
    )
}