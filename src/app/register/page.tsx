"use client";

import style from "./register.module.css";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Register() {

    const[activ, setActiv] = useState<boolean>(false);

    return (
        <div className={style.tilo}>
            <div className={`${style.container} ${activ ? style.active : ''} `}>
                <div className={`${style.form_box} ${style.login}`}>
                    <form className={style.forma} action="">
                        <h1>Авторизація</h1>
                        <div className={style.input_box}>
                            <input type="text" placeholder="Нікнейм" required/>
                            <img src="./user.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="password" placeholder="Пароль" required/>
                            <img src="./lock.png" alt="" />
                        </div>
                        <Link className={style.home} href='/'>
                            <p>На головну сторінку</p>
                        </Link>
                        <button type="submit" className={style.btn}>Логін</button>
                    </form>
                </div>

                <div className={`${style.form_box} ${style.registers}`}>
                    <form className={style.forma} action="">
                        <h1>Реєстрація</h1>
                        <div className={style.input_box}>
                            <input type="text" placeholder="Прізвище" required/>
                            <img src="./user.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="text" placeholder="Ім'я" required/>
                            <img src="./user.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="text" placeholder="Нікнейм" required/>
                            <img src="./user.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="tel" placeholder="Номер телефону" required/>
                            <img src="./smartphone.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="password" placeholder="Пароль" required/>
                            <img src="./lock.png" alt="" />
                        </div>
                        <div className={style.input_box}>
                            <input type="password" placeholder="Провірка паролю" required/>
                            <img src="./lock.png" alt="" />
                        </div>
                        <Link className={style.home} href='/'>
                            <p>На головну сторінку</p>
                        </Link>
                        <button type="submit" className={style.btn}>Логін</button>
                    </form>
                </div>

                <div className={style.toggle_box}>
                    <div className={`${style.toggle_panel} ${style.toggle_left}`}>
                        <h1>Привіт, Вітаємо!</h1>
                        <p>Не маєте облікового запису?</p>
                        <button className={`${style.btn} ${style.register_btn}`} onClick={()=>setActiv(true)}>Реєстрація</button>
                    </div>
                    <div className={`${style.toggle_panel} ${style.toggle_right}`}>
                        <h1>Вітаємо Знову</h1>
                        <p>Вже маєте обліковий запис?</p>
                        <button className={`${style.btn} ${style.login_btn}`} onClick={()=>setActiv(false)}>Логін</button>
                    </div>
                </div>
            </div>
        </div>
    )
}