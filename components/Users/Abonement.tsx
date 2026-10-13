"use client";

import style from "../../styles/users.module.css";

export default function Abonement() {
    return (
        <div className={style.abonement}>
            <span>
                <p>Номер абонементу</p>
                <p>Кількість занять</p>
                <p>Дата видачі</p>
                <p>Дата завершення</p>
                <p>Дійсний</p>
            </span>
            <span>
                <p>36</p>
                <p>24</p>
                <p>2027-05-29</p>
                <p>2027-07-13</p>
                <p>Так</p>
            </span>
        </div>
    )
}