import { defineComponent } from "vue";
import getUserComposables from "./composables/user";
import styles from "./Login.module.scss";

export default defineComponent({
  name: "Login",
  setup() {
    const { proxy, user, onSubmitRegister, gotoLogin } = getUserComposables();

    return () => (
      <>
        <el-row class={styles.show}>
          <el-col class={styles.left} sm={16}>
            LspChat
          </el-col>
          <el-col sm={2}></el-col>
          <el-col sm={4}>
            <h1>{proxy.$t("register.name")}</h1>
            <el-form>
              <el-form-item label={proxy.$t("register.username")}>
                <el-input type="text" vModel={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label={proxy.$t("register.email")}>
                <el-input type="text" vModel={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label={proxy.$t("register.password")}>
                <el-input
                  type="password"
                  vModel={user.value.password}
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onSubmitRegister}>
                  {proxy.$t("button.register")}
                </el-button>
                <el-button type="info" onClick={gotoLogin}>
                  {proxy.$t("button.back")}
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </>
    );
  }
});
