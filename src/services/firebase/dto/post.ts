export interface IGetData {
  title: string;
  description: string;
  url: string;
  like: number;
  unlike: number;
  id?: string;
}

export interface ICreateDTO {
  id?: string;
  title: string;
  description: string;
  url: string;
  like: number;
  unlike: number;
}
