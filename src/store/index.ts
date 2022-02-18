import { createStore } from "redux";
import { IPlayerState } from "./modules/player/types";
import rootReducers from "./modules/rootReducers";

export interface IState {
  video: IPlayerState;
}
const store = createStore(rootReducers);

export default store;
