import { NextPage } from "next";
import styles from "./styles.module.scss";

export const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>Logotipo</div>
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
