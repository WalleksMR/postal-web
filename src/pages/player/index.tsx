import type { NextPage } from "next";
import Head from "next/head";
import BannerPlay from "../../components/BannerPlay";

const Player: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portal Web | Play</title>
      </Head>

      <BannerPlay />
    </>
  );
};

export default Player;
