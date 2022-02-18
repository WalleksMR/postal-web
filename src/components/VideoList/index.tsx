import type { NextPage } from "next";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addVideoToPlayer } from "../../store/modules/player/actions";
import { IPlayer } from "../../store/modules/player/types";
import styles from "./styles.module.scss";

const VideoList: NextPage = () => {
  const dispatch = useDispatch();
  const videos: IPlayer[] = [
    {
      title: "Dirty Heads - Vacation (Official Video)",
      description:
        "Official music video for 'Vacation' by Dirty Heads featuring Mr. Belding (Dennis Haskins). New album 'Swim Team' - coming out Oct. 13.",
      url: "https://www.youtube.com/watch?v=7zok9co_8E4&list=RD7zok9co_8E4&start_radio=1",
      like: 22,
      unlike: 2,
      id: "123",
    },
    {
      title: "Harry Styles - Watermelon Sugar (Official Video)",
      description: "teste youtube.",
      url: "https://www.youtube.com/watch?v=E07s5ZYygMg",
      like: 22,
      unlike: 2,
      id: "222",
    },
  ];

  const handleVideoToPlayer = useCallback(
    (video: IPlayer) => {
      dispatch(addVideoToPlayer(video));
    },
    [dispatch]
  );
  return (
    <div className={styles.container}>
      {videos.map((v) => (
        <div
          key={v.id}
          className={styles.videoBox}
          onClick={() => handleVideoToPlayer(v)}
        >
          <Image src="/logo-banner.png" width={210} height={180} alt="Titulo" />
          <p>Titlo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            magni optio? Impedit sequi ab aspernatur quo molestiae quaerat eos?
          </p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
