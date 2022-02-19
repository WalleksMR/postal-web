import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import BannerPlay from "../components/BannerPlay";
import Content from "../components/Content";
import VideoList from "../components/VideoList";
import { IState } from "../store";
import { IPlayerItem } from "../store/modules/player/types";

const Home: NextPage = () => {
  const { video } = useSelector<IState, IPlayerItem>(
    (state) => state.video.items
  );

  return (
    <>
      <Head>
        <title>Portal Web | Inicio</title>
      </Head>

      {video.id ? <BannerPlay /> : <Banner />}
      <Content>
        <VideoList />
      </Content>
    </>
  );
};

export default Home;
