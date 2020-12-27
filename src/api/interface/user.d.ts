import { Resp } from "./data";

export interface UserData extends UrlParams {
  id?: string;
  chat_no?: number;
  username?: string;
  password?: string;
  avatar?: number;
  nickname?: string;
  user_state_id?: number;
}

export interface RespLogin {
  token: string;
  userinfo: UserData;
}