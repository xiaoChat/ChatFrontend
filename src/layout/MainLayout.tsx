import { defineComponent } from "vue";
import YeMenu from "@/components/YeMenu/Index";
import styles from "./Base.module.scss";

export default defineComponent({
  name: "Main",
  render() {
    return (
      <el-container class={styles["height"]}>
        <YeMenu />
        <el-main class={styles["height"]}>
          <router-view></router-view>
        </el-main>
      </el-container>
    );
  }
});
