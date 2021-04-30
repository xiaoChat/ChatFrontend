import Message from "element-plus/lib/el-message";
import { defineComponent, ref } from "vue";
import { UserData } from "@/api/interface/user";
import { login } from "@/api";
import router from "@/router";
import { setAuthority } from "@/utils/authority";

export default defineComponent({
  name: "Login",
  setup() {
    const user = ref<UserData>({
      username: "",
      password: ""
    });

    const onSubmit = async () => {
      const { code, message, data } = await login(user.value);
      if (code == 0) {
        setAuthority(data.token, data.userinfo);
        router.push("home");
      } else {
        Message.error(message);
      }
    };

    const goto = () => {
      router.push("register");
    };

    return () => (
      <>
        <el-row>
          <el-col sm={18}>LspChat</el-col>
          <el-col sm={4}>
            <h1>登录</h1>
            <el-form>
              <el-form-item label="用户名">
                <el-input type="text" vModel={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  type="password"
                  vModel={user.value.password}
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
