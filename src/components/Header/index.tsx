import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { SignInButton } from "../SignInButton";
const Header: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src="/logo.png" width={75} height={70} alt="Logo Portal Web" />

        <nav>
          <ul>
            <li>
              <a
                href={
                  process.env.NEXT_PUBLIC_BASE_URL
                    ? process.env.NEXT_PUBLIC_BASE_URL
                    : "http://localhost:3000"
                }
              >
                Inicio
              </a>
            </li>
            <li>
              <Link
                href={`${
                  process.env.NEXT_PUBLIC_BASE_URL
                    ? process.env.NEXT_PUBLIC_BASE_URL
                    : "http://localhost:3000"
                }/admin`}
              >
                Novo vídeo
              </Link>
            </li>
          </ul>
        </nav>

        <SignInButton />
      </div>
    </div>
  );
};

export default Header;
