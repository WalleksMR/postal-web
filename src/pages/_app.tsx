import type { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/globals.scss";
import styles from "../styles/app.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Provider store={store}>
        <div className={styles.wapper}></div>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </Provider>
    </NextAuthProvider>
  );
}

export default MyApp;
