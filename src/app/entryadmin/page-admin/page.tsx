"use client";

import style from './page_admin.module.css';

import Link from "next/link";

import Statistic from '../../../../components/Administrator/Statistic';

export default function Page_admin() {
    return (
        <div className={style.tilo}>
            <span className={style.pc}>
                <header className={style.head}>
                    <img src="/Logotup.png" alt="" />
                    <h4>SDC Ternopil</h4>
                </header>
                <nav className={style.navigatia}>
                    <aside>
                        <span>
                            <p>Статистика</p>
                            <p>Групи</p>
                            <p>Клієнти</p>
                            <Link href='/'>
                                <p>Вихід</p>
                            </Link>
                        </span>
                        <h3>Вкладки</h3>
                        <span>
                            <p>Головна</p>
                            <p>Про нас</p>
                            <p>Педагоги</p>
                            <p>Стилі</p>
                            <p>Ціна</p>
                            <p>Розклад</p>
                            <p>Блог</p>
                        </span>
                        <h3>Інформація</h3>
                        <span>
                            <p>Карта</p>
                            <p>Адреса</p>
                            <p>Контакти</p>
                        </span>
                    </aside>
                    <main>
                        <Statistic />
                    </main>
                </nav>
            </span>
        </div>
    )
}