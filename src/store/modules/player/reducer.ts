import produce from "immer";
import { Reducer } from "redux";
import PostsRepository from "../../../services/firebase/repository/PostsRepository";
import { IPlayerState } from "./types";

const INITIAL_STATE: IPlayerState = {
  items: {
    video: { title: "", description: "", url: "", like: 0, unlike: 0, id: "" },
  },
};

const video: Reducer<IPlayerState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_VIDEO_TO_PLAYER": {
      const { video } = action.payload;
      return produce(state, (draft) => {
        draft.items.video = video;
      });
    }

    case "ADD_LIKE_TO_VIDEO": {
      return produce(state, (draft) => {
        if (draft.items.video.like === 0) {
          draft.items.video.like = 1;
        } else {
          draft.items.video.like + 1;
        }
        PostsRepository.update(
          String(draft.items.video.id),
          draft.items.video.like
        );
      });
    }
    default: {
      return state;
    }
  }
};

export default video;
