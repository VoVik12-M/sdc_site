import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Social_media from "../../components/Social_media";

export default function Home() {
  return (
    <div>
      <Header />
      <video src="/video-fon.mp4" autoPlay muted loop ></video>
      <Social_media />
    </div>
  );
}
