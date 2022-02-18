import type { NextPage } from "next";
import Image from "next/image";

import styles from "./styles.module.scss";
import logoBanner from "/public/logo-banner.png";

const Banner: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <p>Portal Web</p>
          <p>O melhor portal de vídeos da internet! </p>
        </div>
        <Image src={logoBanner} width={468} height={391} alt="Portal Web" />
      </div>
    </div>
  );
};

export default Banner;
