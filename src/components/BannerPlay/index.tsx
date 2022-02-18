import type { NextPage } from "next";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { IState } from "../../store";
import { IPlayerItem } from "../../store/modules/player/types";
import { MdThumbUpAlt, MdThumbDownAlt } from "react-icons/md";

import styles from "./styles.module.scss";

const BannerPlay: NextPage = () => {
  const { video } = useSelector<IState, IPlayerItem>(
    (state) => state.video.items
  );
  console.log(video);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div key={video.id} className={styles.playerVideo}>
          <ReactPlayer
            url={video.url}
            width={850}
            height={430}
            autoPlay={true}
          />
          <div>
            <span>
              <button>
                <MdThumbDownAlt />
              </button>
              <button>
                <MdThumbUpAlt />
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
  );
};

export default BannerPlay;
