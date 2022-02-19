import type { NextPage } from "next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostsRepository from "../../services/firebase/repository/PostsRepository";
import { addVideoToPlayer } from "../../store/modules/player/actions";
import { IPlayer } from "../../store/modules/player/types";
import styles from "./styles.module.scss";

const VideoList: NextPage = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState<IPlayer[]>([]);

  useEffect(() => {
    PostsRepository.listAll().then((response) => {
      response.sort(function (item, item2) {
        return item.like - item2.like;
      });
      setVideos(response.reverse());
    });
  }, []);

  function youtube_parser(url: string) {
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return null;
    }
  }

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
          <Image
            src={`https://img.youtube.com/vi/${youtube_parser(
              v.url
            )}/sddefault.jpg`}
            width={210}
            height={180}
            alt="Titulo"
          />

          <p>{v.title}</p>
          <p>{v.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
