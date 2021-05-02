import { defineComponent } from "vue";
import YeHeader from "@/components/YeHeader/Index";
import styles from "./Base.module.scss";
import { mapState } from "vuex";

export default defineComponent({
  name: "Base",
  computed: {
    ...mapState(["showHeader"])
  },
  render() {
    const _header = (
      <el-header class={styles["el-header"]}>
        <YeHeader />
      </el-header>
    );
    return (
      <>
        <el-container class={styles["height"]}>
          {this.showHeader ? _header : ""}
          <el-main class={[styles["height"], styles["el-main"]]}>
            <router-view />
          </el-main>
        </el-container>
      </>
    );
  }
});
