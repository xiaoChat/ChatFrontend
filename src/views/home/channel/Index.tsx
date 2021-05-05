import { defineComponent, ref, watchEffect } from "vue";
import styles from "./Index.module.scss";
import ChatMessage from "@/components/ChatMessage/Index";
import { escape } from "@/utils/utils";
import marked from "marked";
import hljs from "highlight.js";

export default defineComponent({
  name: "HomeChannel",
  setup() {
    const box = ref<HTMLElement>();
    const inputText = ref<string>();
    const lists = ref([
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk",
        msg: "123123123"
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg: escape(
          "123123123sa fsdj dhslj hflasdh as 啊<script>alert(1)</script>hfljsadh fwie hksjafh "
        )
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg: "123123123sa fsdj dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      }
    ]);
    const updateScrollBar = () => {
      const tes = (box.value as HTMLElement).children[0].children[0];
      tes.scrollTop = tes.scrollHeight;
    };

    watchEffect(
      () => {
        updateScrollBar();
        return lists.value.length;
      },
      {
        flush: "post"
      }
    );

    marked.setOptions({
      breaks: true,
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      }
    });

    const sendMessage = () => {
      lists.value.push({
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk",
        msg: marked(escape(inputText.value as string))
      });
      inputText.value = "";
    };

    const altSSendMessage = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key == "Enter") {
        inputText.value += "\n";
      } else if (e.key == "Enter" || (e.altKey && e.key == "s")) {
        sendMessage();
      }
    };

    return () => (
      <>
        <div class={styles.contianer} onKeyup={altSSendMessage}>
          <el-row class={styles.header}>
            <el-col sm={16} class={styles.title}>
              <div>
                <el-avatar
                  shape="square"
                  size={36}
                  src={require("@/assets/logo.png")}
                ></el-avatar>
              </div>
              <h3>前端交流群</h3>
            </el-col>
            <el-col sm={8} class={styles.tool}>
              <a>
                <i class="el-icon-edit"></i>
              </a>
              <a>
                <i class="el-icon-edit"></i>
              </a>
              <a>
                <i class="el-icon-edit"></i>
              </a>
              <a>
                <i class="el-icon-share"></i>
              </a>
              <a>
                <i class="el-icon-delete"></i>
              </a>
            </el-col>
          </el-row>
          <el-row class={styles.main}>
            <el-col sm={16} class={styles.left}>
              <div ref={box} class={styles.main}>
                <el-scrollbar>
                  {lists.value.map((v, k) => {
                    return (
                      <ChatMessage
                        isSelf={k % 2 == 0}
                        name={v.name}
                        title={v.title}
                        avatar={v.avatar}
                        msg={v.msg}
                        v-slots={{
                          default: () => v.msg
                        }}
                      />
                    );
                  })}
                </el-scrollbar>
              </div>
              <div class={styles.input}>
                <el-input type="textarea" v-model={inputText.value}></el-input>
                <div class={styles.send}>
                  <div>
                    <a>
                      <i class="el-icon-picture-outline"></i>
                    </a>
                    <a>
                      <i class="el-icon-edit"></i>
                    </a>
                  </div>
                  <div>
                    <el-button
                      type="primary"
                      size="small"
                      onClick={sendMessage}
                    >
                      发送(s)
                    </el-button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col sm={8} class={styles.right}>
              其他信息
            </el-col>
          </el-row>
        </div>
      </>
    );
  }
});
