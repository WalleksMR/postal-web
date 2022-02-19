import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { IState } from "../../store";
import { IPlayerItem } from "../../store/modules/player/types";
import { MdThumbUpAlt, MdThumbDownAlt } from "react-icons/md";

import styles from "./styles.module.scss";
import { useCallback } from "react";
import { addLikeToVideo } from "../../store/modules/player/actions";
import Head from "next/head";
import { useSession } from "next-auth/client";

const BannerPlay: NextPage = () => {
  const dispatch = useDispatch();
  const [session] = useSession();

  const { video } = useSelector<IState, IPlayerItem>(
    (state) => state.video.items
  );
  const handleToggleLike = useCallback(() => {
    if (!session) {
      return;
    }
    dispatch(addLikeToVideo(video));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Portal Web | Play</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div key={video.id} className={styles.playerVideo}>
            <ReactPlayer url={video.url} width={850} height={430} autoPlay />
            <div>
              <span>
                <button>
                  <MdThumbUpAlt onClick={handleToggleLike} />
                </button>
                <p>{video.like}</p>
              </span>
            </div>
          </div>
          <div className={styles.playerTitle}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerPlay;
