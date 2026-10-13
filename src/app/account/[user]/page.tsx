"use client";

import style from "./account.module.css";

import { useRef, useState, useEffect } from "react";

import Qarkod from "../../../../components/Users/qarkod";
import Reqwizutu from "../../../../components/Users/Reqwizutu";
import Tarufu from "../../../../components/Users/Tarufu";
import Abonement from "../../../../components/Users/Abonement";
import HistoryTrein from "../../../../components/Users/HistoryTrein";
import HistoryAbonement from "../../../../components/Users/HistoryAbonement";

import Link from "next/link";

export default function Account() {

    const [qarkod, setQarkod] = useState<boolean>(false);
    const [abonement, setAbonement] = useState<boolean>(false);
    const [tarufu, setTarufu] = useState<boolean>(false);
    const [historytrein, setHistorytrein] = useState<boolean>(false);
    const [historyabonement, setHistoryabonement] = useState<boolean>(false);
    const [reqwizutu, setReqwizutu] = useState<boolean>(false);

    function knopka(vuraz:string) {
        if (vuraz === "qarkod") {
            setQarkod(true);
            setAbonement(false);
            setTarufu(false);
            setHistorytrein(false);
            setHistoryabonement(false);
            setReqwizutu(false);
        }
        else if (vuraz === "abonement") {
            setQarkod(false);
            setAbonement(true);
            setTarufu(false);
            setHistorytrein(false);
            setHistoryabonement(false);
            setReqwizutu(false);
        }
        else if (vuraz === "tarufu") {
            setQarkod(false);
            setAbonement(false);
            setTarufu(true);
            setHistorytrein(false);
            setHistoryabonement(false);
            setReqwizutu(false);
        }
        else if (vuraz === "historytrein") {
            setQarkod(false);
            setAbonement(false);
            setTarufu(false);
            setHistorytrein(true);
            setHistoryabonement(false);
            setReqwizutu(false);
        } 
        else if (vuraz === "historyabonement") {
            setQarkod(false);
            setAbonement(false);
            setTarufu(false);
            setHistorytrein(false);
            setHistoryabonement(true);
            setReqwizutu(false);
        } 
        else if (vuraz === "reqwizutu") {
            setQarkod(false);
            setAbonement(false);
            setTarufu(false);
            setHistorytrein(false);
            setHistoryabonement(false);
            setReqwizutu(true);
        } 
    }

    return (
        <div className={style.tilo}>
            <div className={style.header}>
                <img src="/Logotup.png" alt="" />
                <div>
                    <span>
                        <p>Володимир</p>
                        <p>Маслик</p>
                    </span>
                    <span>
                        <Link href='/'>
                            <img className={style.house} src="/home.png" alt="" />
                        </Link>
                        <Link href='/'>
                            <img src="/exit.png" alt="" />
                        </Link>
                    </span>
                </div>
            </div>
            <div className={style.headermobile}>
                <img src="/Logotup.png" alt="" />
                <span>
                    <p>Володимир</p>
                    <p>Маслик</p>
                </span>
            </div>
            <div className={style.navigation}>
                <div>
                    <span onClick={()=>knopka("qarkod")}>
                        <p>QR-код</p>
                    </span>
                    <span onClick={()=>knopka("abonement")}>
                        <p>Діючі абонементи</p>
                    </span>
                    <span onClick={()=>knopka("tarufu")}>
                        <p>Тарифи</p>
                    </span>
                </div>
                <div>
                    <span onClick={()=>knopka("historytrein")}>
                        <p>Історія тренувань</p>
                    </span>
                    <span onClick={()=>knopka("historyabonement")}>
                        <p>Історія абонементів</p>
                    </span>
                    <span onClick={()=>knopka("reqwizutu")}>
                        <p>Реквізити</p>
                    </span>
                </div>
            </div>
            <div className={style.pole_exid}>
                <Link href='/'>
                    <span>
                        <img src="/homeWhite.png" alt="" />
                    </span>
                </Link>
                <Link href='/'>
                    <span>
                        <img src="/exitWhite.png" alt="" />
                    </span>
                </Link>
            </div>
            <div className={style.pole}>
                {qarkod ? <Qarkod /> : ''}
                {abonement ? <Abonement /> : ''}
                {tarufu ? <Tarufu /> : ''}
                {historytrein ? <HistoryTrein/> : ''}
                {historyabonement ? <HistoryAbonement /> : ''}
                {reqwizutu ? <Reqwizutu /> : ''}
            </div>
        </div>
    )
}