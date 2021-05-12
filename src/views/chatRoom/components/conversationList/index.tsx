import { defineComponent, ref, watch } from "vue";
import Conversation from "../../im/conversation";
import styles from "./Index.module.scss";
export default defineComponent({
  name: "conversationList",
  setup() {
    // let lastActiveConversation: string = "";
    // let activeConversation: string = "";
    let conversationList: Array<Conversation> = [];
    const mockData: Array<Conversation> = new Array(100)
      .fill(1)
      .map((_item, index) => {
        return {
          type: "c2c",
          id: `c2c-${index}`,
          name: `夜市湖-${index}`,
          avatar:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2062164223,3783917881&fm=26&gp=0.jpg",
          at: false,
          unReadNumber: 0,
          lastMessage: {
            lastTime: 2000,
            fromAccount: "小赤佬",
            messageForShow: "123dg123dg123dg123dg123dg"
          }
        };
      });
    conversationList = mockData;
    const filterStr = ref("");

    watch(filterStr, () => {
      const newList = mockData.filter(conversation => {
        const reg = new RegExp(filterStr.value);
        return reg.test(conversation.name);
      });
      conversationList = newList;
      console.log(newList);
    });

    return () => (
      <div class={styles["conversationList"]}>
        <div class={styles["conversationList-t"]}>
          <el-input
            type="text"
            v-model={filterStr.value}
            prefix-icon="el-icon-search"
            size="mini"
          />
        </div>
        <el-scrollbar>
          {conversationList.map(conversation => {
            return (
              <div
                // onMouseover={() => {
                //   lastActiveConversation = activeConversation = conversation.id;
                // }}
                // onMouseleave={() => {
                //   activeConversation = lastActiveConversation;
                // }}
                class={styles["conversation"] + " " + styles["active"]}
              >
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
