import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  defineComponent,
  getCurrentInstance
} from "vue";
import styles from "./Index.module.scss";

export default defineComponent({
  name: "YeMenu",
  setup() {
    const proxy = (getCurrentInstance() as ComponentInternalInstance)
      .proxy as ComponentPublicInstance;

    const goto = () => {
      proxy.$router.push({ name: "HomeChannel" });
    };

    return () => (
      <>
        <div class={styles.menu}>
          {/* Header */}
          <div onClick={goto}> # 群聊 </div>
          {/* chat */}
          <div></div>
          <div>asdkkkkk skd fhjsakh jk hjkh jkdh </div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
          <div>hwa</div>
        </div>
      </>
    );
  }
});
