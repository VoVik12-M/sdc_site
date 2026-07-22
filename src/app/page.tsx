"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Social_media from "../../components/Social_media";
import { useRef, useState, useEffect } from "react";

export default function Home() {

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
      const handleResize = () => {
          setWidth(window.innerWidth);
      };

      handleResize(); // Отримати розмір одразу після завантаження

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <div>
      <Header />
      <video src="/video-fon.mp4" autoPlay muted loop ></video>
      {width > 680 ? <Social_media /> : '' }
      
    </div>
  );
}
