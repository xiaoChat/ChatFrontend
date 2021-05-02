import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  defineComponent,
  getCurrentInstance,
  ref
} from "vue";
import styles from "./Index.module.scss";

export default defineComponent({
  name: "YeHeader",
  setup() {
    const proxy = (getCurrentInstance() as ComponentInternalInstance)
      .proxy as ComponentPublicInstance;

    const activeIndex = ref<string>("chat");

    const handleSelect = (key: number, keyPath: string) => {
      console.log(key, keyPath);
    };
    return () => (
      <>
        <el-menu
          default-active={activeIndex.value}
          mode="horizontal"
          onSelect={handleSelect}
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          {/* left */}
          <div class={styles.opacity0}>
            <img src={require("@/assets/lspchat.png")} alt="LspChat" />
          </div>
          <el-menu-item
            index={"chat"}
            onClick={() => proxy.$router.push({ name: "HomeIndex" })}
          >
            <i class="el-icon-chat-round"></i>
            <slot>{proxy.$t("nav.chat")}</slot>
          </el-menu-item>
          <el-menu-item
            index={"forum"}
            onClick={() => proxy.$router.push({ name: "ForumIndex" })}
          >
            <i class="el-icon-chat-line-square"></i>
            <slot>{proxy.$t("nav.forum")}</slot>
          </el-menu-item>
          <el-menu-item
            index={"tool"}
            onClick={() => proxy.$router.push({ name: "ToolIndex" })}
          >
            <i class="el-icon-menu"></i>
            <slot>{proxy.$t("nav.tool")}</slot>
          </el-menu-item>
          {/* right */}
          <el-menu-item
            class={styles.right}
            index={"register"}
            onClick={() => proxy.$router.push({ name: "Register" })}
          >
            <slot>{proxy.$t("nav.register")}</slot>
          </el-menu-item>
          <el-menu-item
            class={styles.right}
            index={"login"}
            onClick={() => proxy.$router.push({ name: "Login" })}
          >
            <slot>{proxy.$t("nav.login")}</slot>
          </el-menu-item>
          <el-menu-item disabled class={styles.right}>
            |
          </el-menu-item>
          <el-submenu
            class={styles.right}
            index="2"
            v-slots={{
              // 后续替换为用户名
              title: () => "Yexk"
            }}
          >
            <el-menu-item index="2-1">{proxy.$t("nav.profile")}</el-menu-item>
            <el-menu-item index="2-1">{proxy.$t("nav.logout")}</el-menu-item>
          </el-submenu>
        </el-menu>
      </>
    );
  }
});
