import { useSession, signIn, signOut } from "next-auth/client";
import styles from "./styles.module.scss";
import { FaRegUser, FaUserCircle } from "react-icons/fa";

export function SignInButton() {
  const [session] = useSession();

  return (
    <div className={styles.signInButton}>
      {session?.user ? (
        <div onClick={() => signOut()}>
          <FaUserCircle size={32} />
          <p>{session.user.name}</p>
        </div>
      ) : (
        <div onClick={() => signIn()}>
          <FaRegUser size={32} />
          <p>login</p>
        </div>
      )}
    </div>
  );
}
