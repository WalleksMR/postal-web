import { ReactElement, ReactNode } from "react";

import styles from "./styles.module.scss";
interface IContentProps {
  children: ReactNode;
}
const Content = ({ children }: IContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Content;
