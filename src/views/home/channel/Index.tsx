import { defineComponent, onMounted, ref } from "vue";
import styles from "./Index.module.scss";
import ChatMessage from "@/components/ChatMessage/Index";

export default defineComponent({
  name: "HomeChannel",
  setup() {
    const box = ref<HTMLElement>();
    const lists = [
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
        msg: "123123123sa fsdj dhslj hflasdh as hfljsadh fwie hksjafh "
      },
      {
        avatar: "https://v3.cn.vuejs.org/logo.png",
        title: "[新手]",
        name: "Yexk_M",
        msg:
          "123123123sa fsdj dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwiej dhslj hflasdh as hfljsadh fwie hksjafh "
      }
    ];
    onMounted(() => {
      const tes = (box.value as HTMLElement).children[0].children[0];
      tes.scrollTop = tes.scrollHeight;
    });

    return () => (
      <>
        <div class={styles.contianer}>
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
                  {lists.map((v, k) => {
                    return (
                      <ChatMessage
                        isSelf={k % 2 == 0}
                        name={v.name}
                        avatar={v.avatar}
                        v-slots={{
                          default: () => v.msg
                        }}
                      />
                    );
                  })}
                </el-scrollbar>
              </div>
              <div class={styles.input}>
                <textarea name="" id=""></textarea>
                <el-button type="primary">发送</el-button>
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
