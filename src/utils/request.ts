import axios, { AxiosRequestConfig, Method } from "axios";
import Notify from "element-plus/lib/el-notification";

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

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
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

_axios.interceptors.response.use(
  function (response) {
    if (response && response.status != 200) {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, statusText } = response;
      Notify({
        title: `${status} : ${statusText}`,
        message: `${errorText}`
      })
    }
    return response.data;
  },
  function (error) {
    Notify({
      title: '您的网络发生异常，无法连接服务器!',
      message: '网络异常',
    });
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<any>}
 * 
 */
// eslint-disable-next-line
async function request(url: string, method: Method, params?: UrlParams): Promise<any> {
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
