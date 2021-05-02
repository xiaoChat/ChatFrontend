import { defineComponent } from "vue";
import styles from "./Base.module.scss";

export default defineComponent({
  name: "Forum",
  render() {
    return (
      <>
        <el-container class={styles["height"]}>
          <el-main class={styles["height"]}>
            <router-view></router-view>
          </el-main>
        </el-container>
      </>
    );
  }
});
