export interface IGetData {
  id?: string;
  name: string;
  email: string;
  isAdmin: boolean;
  urlProfile?: string;
}

export interface ICreateDTO {
  id?: string;
  name: string;
  email: string;
  isAdmin: boolean;
  urlProfile: string;
}
