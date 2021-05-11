/**
 * 最后一条消息
 */
interface lastMessage {
  //群组最后一条消息的时间戳，单位：秒
  lastTime: Number;
  // 群组最后一条消息的来源用户
  fromAccount: Number;
  // 用于展示的群组最后一条消息的简要内容，文本则展示原内容，图片则展示“[图片]”。
  messageForShow: Number;
}
/**
 * 会话体
 */
interface Conversation {
  type: "c2c" | "group" | "sys";
  //消息类型
  unReadNumber?: number;
  //未读消息数
  lastInfoTime?: number | string;
  //最后一条消息发送时间
  lastMessage?: lastMessage;
  //最后一条消息
}

/**
 * C2C
 */
interface GroupConversation extends Conversation {
  //群组唯一Id，用于获取群组信息
  groupID: string;
  //群组名称
  name: string;
  //群组头像文件地址
  avatar: string;
  //是否被@
  at: boolean;
}
/**
 * 群组
 */
interface GroupConversation extends Conversation {
  //群组唯一Id，用于获取群组信息
  groupID: string;
  //群组名称
  name: string;
  //群组头像文件地址
  avatar: string;
  //是否被@
  at: boolean;
}
export default GroupConversation;
