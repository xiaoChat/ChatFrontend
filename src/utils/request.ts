import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

enum Methods {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  PURGE = 'PURGE',
  LINK = 'LINK',
  UNLINK = 'UNLINK',
}

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_URL || process.env.VUE_APP_API_URL || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request(url: string, method: Method, params?: UrlParams): Promise<AxiosResponse> {
  switch (method) {
    case Methods.GET:
      return _axios.get(url, { params })
    case Methods.POST:
      return _axios.post(url, params)
    default:
      return _axios.get(url, { params })
  }
}

/**
 * 解析 url 中的参数
 * @param url
 * @returns {Object}
 */
function parseUrlParams(url: string): UrlParams {
  const params: UrlParams = {}
  if (!url || url === '' || typeof url !== 'string') {
    return params
  }
  const paramsStr: string = url.split('?')[1]
  if (!paramsStr) {
    return params
  }
  const paramsArr: string[] = paramsStr.replace(/&|=/g, ' ').split(' ')
  for (let i = 0; i < paramsArr.length / 2; i++) {
    const value = paramsArr[i * 2 + 1]
    params[paramsArr[i * 2]] = value === 'true' ? true : (value === 'false' ? false : value)
  }
  return params
}

export {
  Methods,
  request,
  parseUrlParams
}
