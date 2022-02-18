import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./styles.module.scss";
import { FaGoogle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export function SignInButton() {
  const { data: session, status } = useSession();

  return (
    <div className={styles.signInButton}>
      <div>
        <FiUser size={32} />
        <p>login</p>
      </div>
    </div>
  );
}
