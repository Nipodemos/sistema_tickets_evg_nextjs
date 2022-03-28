import { NextPage } from "next";
import styles from "./styles.module.scss";
import { Menu, Pane } from "evergreen-ui";
import Link from "next/link";

export const Layout: NextPage = ({ children }) => {
  return (
    <Pane className={styles.container}>
      <Pane is="nav" elevation={2} className={styles.sidebar}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Logotipo</a>
          </Link>
        </div>

        <Menu>
          <Menu.Item>
            <Link href="/listar_tickets">
              <a>Listar tickets</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/listar_tickets">
              <a>Criar novo ticket</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Pane>
      <Pane is="main" className={styles.mainContent}>
        {children}
      </Pane>
    </Pane>
  );
};
