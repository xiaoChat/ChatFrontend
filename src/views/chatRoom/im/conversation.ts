/**
 * 最后一条消息
 */
interface lastMessage {
  //最后一条消息的时间戳，单位：秒
  lastTime: Number;
  // 最后一条消息的来源用户
  fromAccount: string;
  // 用于展示的群组最后一条消息的简要内容，文本则展示原内容，图片则展示“[图片]”。
  messageForShow: string;
}
/**
 * 会话体
 */
interface Conversation {
  type: "c2c" | "group" | "sys"; //消息类型
  id: string; //唯一Id，用于获取会话信息
  name: string; //群组名称
  avatar: string; //群组头像文件地址
  at: boolean; //是否被@
  unReadNumber?: number; //未读消息数
  lastMessage?: lastMessage; //最后一条消息
}
export default Conversation;
