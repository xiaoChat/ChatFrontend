import { defineComponent } from "vue";
import getUserComposables from "./composables/user";

export default defineComponent({
  name: "Login",
  setup() {
    const { proxy, user, onSubmitLogin, gotoRegister } = getUserComposables();

    const onSubmit = onSubmitLogin;

    const goto = gotoRegister;

    return () => (
      <>
        <el-row>
          <el-col sm={18}>LspChat</el-col>
          <el-col sm={4}>
            <h1>{proxy.$t("login.name")}</h1>
            <el-form onSubmit={goto}>
              <el-form-item label={proxy.$t("login.username")}>
                <el-input type="text" v-model={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  type="password"
                  v-model={user.value.password}
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onSubmit}>
                  登录
                </el-button>
                <el-button onClick={goto}>注册</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </>
    );
  }
});
