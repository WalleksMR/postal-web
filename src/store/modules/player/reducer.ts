import produce from "immer";
import { Reducer } from "redux";
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
    default: {
      return state;
    }
  }
};

export default video;
