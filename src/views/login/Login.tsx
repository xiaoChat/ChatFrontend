import { ElFormItemContext } from "element-plus/lib/el-form";
import { defineComponent, ref } from "vue";
import getUserComposables from "./composables/user";
import styles from "./Login.module.scss";

export default defineComponent({
  name: "Login",
  setup() {
    const loginForm = ref<ElFormItemContext>();
    const {
      proxy,
      user,
      rules,
      onSubmitLogin,
      gotoRegister
    } = getUserComposables();

    const onSubmit = () => {
      // 这里先用any, element-plus的types文件有问题。
      (loginForm.value as any).validate((v: any) => {
        if (v) {
          onSubmitLogin();
        }
      });
    };

    // 监听enter事件
    const onEnter = (e: KeyboardEvent) => {
      if (e.key == "Enter") {
        onSubmit();
      }
    };

    return () => (
      <>
        <el-row class={styles.show}>
          <el-col class={styles.left} sm={16}>
            <img src={require("@/assets/lspchat-600.png")} alt="" />
          </el-col>
          <el-col sm={2}></el-col>
          <el-col sm={4}>
            <h1>{proxy.$t("login.name")}</h1>
            <el-form
              ref={loginForm}
              model={user.value}
              rules={rules.value}
              onKeyup={onEnter}
            >
              <el-form-item label={proxy.$t("login.username")} prop="username">
                <el-input type="text" v-model={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label={proxy.$t("login.password")} prop="password">
                <el-input
                  type="password"
                  v-model={user.value.password}
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onSubmit}>
                  {proxy.$t("button.login")}
                </el-button>
                <el-button onClick={gotoRegister}>
                  {proxy.$t("button.register")}
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </>
    );
  }
});
