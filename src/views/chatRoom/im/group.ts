import {
  Message,
  TextPayload,
  ImagePayload,
  VideoPayload,
  FilePayload
} from "./message";

//群组禁言操作列表
interface groupAction {
  userId: string;
  //操作用户ID
  muteTime: number;
  //禁言时常 timestamp 0为解禁
}

/**
 * 群聊提示信息
 */
interface GroupTipPayload {
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  //提示类型 1加群 2退群 3被踢 4设为管理员 5撤销管理员 6群资料变更 7 群成员信息变更（禁言，解禁等）
  userID?: Array<string>;
  //type为1,2,3,4,5时被操作用户列表

  //newGroupProfile?:newGroupProfile;
  //若是群资料变更，该字段存放变更的群资料

  groupActionList?: Array<groupAction>;
  //type为7时获取具体操作列表
}

/**
 * 群聊系统信息
 */
interface GroupSysPayload {
  userId: string;
  // 操作用户列表
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  //1	有用户申请加群	群管理员/群主接收
  //2	申请加群被同意	申请加群的用户接收
  //3	申请加群被拒绝	申请加群的用户接收
  //4	被踢出群组	被踢出的用户接收
  //5	群组被解散	全体群成员接收
  //6	创建群组	创建者接收
  //7	邀请加群	被邀请者接收
  //8	退群	退群者接收
  //9	设置管理员	被设置方接收
  //10 取消管理员	被取消方接收
  handleMessage: string;
  //处理的附言。例如：user1 申请加入 group1 时，若进群需要验证，且 user1 填写了申请加群的附言。则 group1 的管理员会在相应群系统通知中看到该字段。
}

/**
 * 群聊消息体
 * 默认为群聊消息(暂时就只有这个)
 */
interface groupMessage extends Message {
  //消息类型 text文本消息 image图片 video视频 file文件 tip提示（好友申请 加群 退群） sys系统消息(登录 登出 断开连接等)
  type: string;
  //消息内容
  payload:
    | TextPayload
    | ImagePayload
    | VideoPayload
    | FilePayload
    | GroupTipPayload
    | GroupSysPayload;
  //是否撤回
  isRevoked: boolean;
  //发送人群名片
  nameCard: string;
  //消息@的用户列表
  atUserList: Array<string>;
}
export default groupMessage;
