/**
 * 通用消息体
 */
export interface Message {
  id: string;
  //消息 ID
  flow: "in" | "out";
  //消息流向 in为接收 out为发出
  nick: string;
  //发送人名称
  avatar: string;
  //发送人头像
}
//图片文件类型
interface ImageInfo {
  width: number;
  height: number;
  url: string;
  size?: number;
  //0	原图 1	198p压缩图 2	720p压缩图
  type?: number;
}

/**
 * 文本消息
 */
export interface TextPayload {
  text: string;
}

/**
 * 图片消息信息
 */
export interface ImagePayload {
  id: string;
  //图片id
  format?: number;
  //图片格式 JPG/JPEG = 1，GIF = 2，PNG = 3，BMP = 4，其他 = 255
  info: ImageInfo;
  //图片文件类型
}
/**
 * 视频信息
 */
export interface VideoPayload {
  format?: String;
  // 视频文件的格式
  second?: Number;
  // 视频文件的时长，单位秒，整型
  size?: Number;
  // 视频文件大小，单位：Byte
  url: String;
  // 视频文件的地址，可用于播放
  id: String;
  // video 唯一标识
  thumb?: ImageInfo;
  //视频文件缩略图 图片文件类型
}
/**
 * 文件信息
 */
export interface FilePayload {
  id: String;
  // 唯一标识
  fileName: String;
  // 文件名
  fileUrl: String;
  // 文件地址
  fileSize?: Number;
  // 文件大小，单位：Byte
}
