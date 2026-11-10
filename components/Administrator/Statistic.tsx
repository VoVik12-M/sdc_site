"use client";

import style from '../../src/app/entryadmin/page-admin/page_admin.module.css';

export default function Statistic () {

    let grypa_parna = 'Групи(Парні)';
    let grypa_solo = 'Групи(Соло)';

    return (
        <div className={style.stat}>
            <span>
                <h3>Клієнти</h3>
            </span>
            <span>
                <div>
                    <p>Загальна кількість учнів</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Активні</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Не активні</p>
                    <p></p>
                    <p>0</p>
                </div>
            </span>
            <span>
                <h3>{grypa_parna}</h3>
            </span>
            <span>
                <div>
                    <p>Загальна кількість груп</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Сальса і Бачата</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Бачата</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Кізомба</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Зук</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Мамбо</p>
                    <p></p>
                    <p>0</p>
                </div>
            </span>
            <span>
                <h3>{grypa_solo}</h3>
            </span>
            <span>
                <div>
                    <p>Загальна кількість груп</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Леді кіз</p>
                    <p></p>
                    <p>0</p>
                </div>
                <div>
                    <p>Леді стайл</p>
                    <p></p>
                    <p>0</p>
                </div>
            </span>
        </div>
    )
}