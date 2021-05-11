import { defineComponent } from "vue";
import Conversation from "../../im/conversation";
import styles from "./Index.module.scss";
export default defineComponent({
  name: "conversationList",
  setup() {
    const conversationList: Array<Conversation> = new Array(100).fill({
      type: "c2c",
      id: "c2c-1",
      name: "夜市湖",
      avatar:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2062164223,3783917881&fm=26&gp=0.jpg",
      at: false,
      unReadNumber: 0,
      lastMessage: {
        lastTime: 2000,
        fromAccount: "小赤佬",
        messageForShow: "123dg123dg123dg123dg123dg"
      }
    });
    return () => (
      <div class={styles["conversationList"]}>
        <el-scrollbar>
          {conversationList.map(conversation => {
            return (
              <div class={styles["conversation"]}>
                <div class={styles["conversation-l"]}>
                  <div class={styles["conversation-l-l"]}>
                    <img src={conversation.avatar} alt="" srcset="" />
                  </div>
                  <div class={styles["conversation-l-r"]}>
                    <div class={styles["conversation-l-r-t"]}>
                      {conversation.name}
                    </div>
                    <div class={styles["conversation-l-r-b"]}>
                      {conversation.lastMessage?.fromAccount +
                        ":" +
                        conversation.lastMessage?.messageForShow}
                    </div>
                  </div>
                </div>
                <div class={styles["conversation-r"]}>
                  <div class={styles["conversation-r-t"]}>
                    {conversation.lastMessage?.lastTime}
                  </div>
                  <div class={styles["conversation-r-b"]}>
                    {conversation.unReadNumber ? conversation.unReadNumber : ""}
                  </div>
                </div>
              </div>
            );
          })}
        </el-scrollbar>
      </div>
    );
  }
});
