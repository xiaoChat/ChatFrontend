import { Methods, request } from "@/utils/request";
import { Resp } from "./interface/data";
import { RespLogin, UserData } from "./interface/user";
import { User } from './path';

export async function login(params: UserData): Promise<Resp<RespLogin>> {
  return request(User.login, Methods.POST, params)

}

export async function register(params: UserData): Promise<Resp<RespLogin>> {
  return request(User.register, Methods.POST, params)
}
