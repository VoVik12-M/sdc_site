"use client";

import style from "./register.module.css";

export default function register() {
    return (
        <div className={style.tilo}>
            <div className={style.container}>
                <div className={`${style.form_box} ${style.login}`}>
                    <form className={style.forma} action="">
                        <h1>Авторизація</h1>
                        <div className={style.input_box}>
                            <input type="text" placeholder="Нікнейм" required/>
                            <i className={`${style.bx} ${style.bsx_user}`}></i>
                        </div>
                        <div className={style.input_box}>
                            <input type="password" placeholder="Пароль" required/>
                            <i className={`${style.bx} ${style.bsx_lock_alt}`}></i>
                        </div>
                        <button type="submit" className={style.btn}>Логін</button>
                    </form>
                </div>
            </div>
        </div>
    )
}