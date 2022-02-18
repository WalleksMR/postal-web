import type { NextPage } from "next";
import styles from "./styles.module.scss";
const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p>
          <strong>Copyrights © 2022. Todos os direitos reservados</strong>
        </p>
        <p>Make with ❤️ by Walleks Miranda</p>
      </div>
    </div>
  );
};

export default Footer;
