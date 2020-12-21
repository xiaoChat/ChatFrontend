export interface UserData extends UrlParams {
  id?: string;
  chat_no?: number;
  username?: string;
  password?: string;
  avatar?: number;
  nickname?: string;
  user_state_id?: number;
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