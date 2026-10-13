"use client";

import style from "../../styles/users.module.css";

export default function Reqwizutu () {
    return (
        <div className={style.reqwizutu}>
            <span>
                <p>Отримувач</p>
                <p>ФОП Чайка Яна Андрїївна</p>
                <p>ІПН - 3682505123</p>
                <p>Призначення: за абонемент/практику</p>
            </span>
            <span>
                <p>Монобанк</p>
                <p>UA543220010000026009300024276</p>
            </span>
        </div>
    )
}