import { IPlayer } from "./types";

export function addVideoToPlayer(video: IPlayer) {
  return {
    type: "ADD_VIDEO_TO_PLAYER",
    payload: {
      video,
    },
  };
}
