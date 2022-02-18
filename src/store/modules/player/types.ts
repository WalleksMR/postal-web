export interface IPlayer {
  title: string;
  description: string;
  url: string;
  like: number;
  unlike: number;
  id?: string;
}

export interface IPlayerItem {
  video: IPlayer;
}

export interface IPlayerState {
  items: IPlayerItem;
}
