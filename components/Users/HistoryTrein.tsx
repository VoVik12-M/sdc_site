"use client";

import style from "../../styles/users.module.css";

export default function HistoryTrein () {
    return (
        <div className={style.historytrein}>
            <div>
                <h6>№ абонементу</h6>
                <h6>№ заняття</h6>
                <h6>Дата заняття</h6>
                <h6>Група</h6>
            </div>
            <span>
                <p>1</p>
                <p>1</p>
                <p>2020-12-01 19:52:00</p>
                <p>KIZOMBA вт/чт 20:00</p>
            </span>
            <span>
                <p>1</p>
                <p>2</p>
                <p>2020-12-02 19:04:00</p>
                <p>BACHATA середа 19.00-21.00</p>
            </span>
            <span>
                <p>1</p>
                <p>3</p>
                <p>2020-12-02 19:04:00</p>
                <p>BACHATA середа 19.00-21.00</p>
            </span>
            <span>
                <p>1</p>
                <p>4</p>
                <p>2020-12-03 18:37:00</p>
                <p>KIZOMBA вт/чт 19:00</p>
            </span>
            <span>
                <p>1</p>
                <p>5</p>
                <p>2020-12-03 19:45:00</p>
                <p>KIZOMBA вт/чт 20:00</p>
            </span>
            <span>
                <p>1</p>
                <p>6</p>
                <p>2020-12-09 19:16:00</p>
                <p>BACHATA середа 19.00-21.00</p>
            </span>
            <span>
                <p>1</p>
                <p>7</p>
                <p>2020-12-15 18:27:00</p>
                <p>KIZOMBA вт/чт 19:00</p>
            </span>
            <span>
                <p>1</p>
                <p>8</p>
                <p>2020-12-15 19:48:00</p>
                <p>KIZOMBA вт/чт 20:00</p>
            </span>
        </div>
    )
}