"use client";

import styles from "../styles/Youtube.module.css"

export default function Youtube() {
    return (
        <nav className={styles.youtube}>
            <p>Наші стилі танців</p>
            <p>соціальні латиноамериканські танці</p>
            <div className={styles.vid}>
                <div>
                    <h1>Бачата</h1>
                    <iframe
                        src="https://www.youtube.com/embed/j4CmXKDCMzI?si=bBB6593CHGDZkQRy"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1>Сальса</h1>
                    <iframe 
                        src="https://www.youtube.com/embed/Df9GrBwgyjQ?si=02i21GUQXSUoNlp1" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1>Мамбо</h1>
                    <iframe 
                        src="https://www.youtube.com/embed/b3jMTvhZIcQ?si=SxZ4Kl8uG8PBIznX" 
                        title="YouTube video player"  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1>Урбанкіз</h1>
                    <iframe src="https://www.youtube.com/embed/NCVd7r6DO08?si=iRhmZUwEKbdNHkA9" 
                        title="YouTube video player"  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h1>Зук</h1>
                    <iframe src="https://www.youtube.com/embed/C_ZRE1HqCSk?si=cI36VJDlcw8Sg_4t" 
                        title="YouTube video player"  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </nav>
    )
}