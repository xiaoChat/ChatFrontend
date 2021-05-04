import { defineComponent, onMounted, ref } from "vue";
import styles from "./Index.module.scss";

export default defineComponent({
  name: "HomeChannel",
  data() {
    return {
      name: "Yexk"
    };
  },
  setup() {
    const box = ref<HTMLElement>();
    const _msg = (
      <div class={styles.msg}>
        <div class={styles.avatar}>
          <el-avatar
            shape="square"
            size={32}
            src={require("@/assets/logo.png")}
          >
            YM
          </el-avatar>
        </div>
        <div class={styles.box}>
          <div class={styles.name}>
            <span>[新手]</span>
            <span>Yexk_M</span>
          </div>
          <p class={styles.content}>
            阿士大夫撒大发生 ahflaskdhfl hlasfh ksadjlhfdkjhf adjksh kjldh daks
            阿士大夫撒大发生 ahflaskdhfl hlasfh ksadjlhfdkjhf adjksh kjldh daks
            阿士大夫撒大发生 ahflaskdhfl hlasfh ksadjlhfdkjhf adjksh kjldh daks
            阿士大夫撒大发生 ahflaskdhfl hlasfh ksadjlhfdkjhf adjksh kjldh daks
            阿士大夫撒大发生 ahflaskdhfl hlasfh ksadjlhfdkjhf adjksh kjldh daks
            hdfkla hlkdash jkas hjkf dhjl hlas h ljkhlk
          </p>
        </div>
      </div>
    );
    const _selfMsg = (
      <div class={[styles.msg, styles.self]}>
        <div class={styles.box}>
          <div class={styles.name}>
            <span>[新手]</span>
            <span>Yexk_M</span>
          </div>
          <p class={styles.content}>
            hdfkla hlkdash jkas hjkf dhjl hlas h ljkhlk
          </p>
        </div>
        <div class={styles.avatar}>
          <el-avatar
            shape="square"
            size={32}
            src={require("@/assets/logo.png")}
          >
            YM
          </el-avatar>
        </div>
      </div>
    );
    const msg: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
      if (i % 2 == 0) {
        msg.push(_selfMsg);
      }
      msg.push(_msg);
    }

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
                <el-scrollbar>{msg}</el-scrollbar>
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
