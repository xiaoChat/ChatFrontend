export interface UserData extends UrlParams {
  id?: string;
  username?: string;
  age?: number;
  address?: string;
}

export interface RespUserData {
  code: number;
  msg: string;
  data: {
    total: number;
    items: Array<UserData>;
  };
}

export {
  UserData,
  RespUserData
}