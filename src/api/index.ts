import { Methods, request } from "@/utils/request";
import { AxiosResponse } from 'axios';
import { RespUserData, UserData } from './interface/data';
import { GoodsData } from './interface/goods';
import { Goods, User } from './path';

export async function getData(params: UrlParams): Promise<AxiosResponse<RespUserData>> {
  return request(User.list, Methods.GET, params)
}

export async function setData(params: UrlParams): Promise<AxiosResponse<UserData>> {
  return request(User.add, Methods.POST, params)
}

export async function getGoods(): Promise<AxiosResponse<GoodsData>> {
  return request(Goods.list, Methods.GET)
}

export async function setGoods(params: GoodsData): Promise<AxiosResponse<GoodsData>> {
  return request(Goods.list, Methods.POST, params)
}