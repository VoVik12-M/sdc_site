"use client";

import style from './entryadmin.module.css';

import Link from "next/link";

export default function Exitadmin() {
    return (
        <div className={style.tilo}>
            <form>
                <div>
                    <Link href='/'>
                        <img src="/click.png" alt="" />
                    </Link>
                </div>
                <h1>Кабінет Адміністратора</h1>
                <div>
                    <span>
                        <input type="text" required/>
                        <label>Логін</label>
                    </span>
                    <span>
                        <input type="password" required/>
                        <label>Пароль</label>
                    </span>
                </div>
                <button>Гаразд</button>
            </form>
        </div>
    )
}