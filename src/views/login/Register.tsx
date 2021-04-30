import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  defineComponent,
  getCurrentInstance,
  ref
} from "vue";
import { register } from "@/api";
import { UserData } from "@/api/interface/user";
import { setAuthority } from "@/utils/authority";
import styles from "./Login.module.scss";

export default defineComponent({
  name: "Login",
  setup() {
    const proxy = (getCurrentInstance() as ComponentInternalInstance)
      .proxy as ComponentPublicInstance;

    const user = ref<UserData>({
      username: "",
      password: ""
    });

    const onSubmit = async () => {
      // proxy.$message.error("message");
      // proxy.vnode.$Message.error("message");
      const { code, message, data } = await register(user.value);
      if (code == 0) {
        setAuthority(data.token, data.userinfo);
        proxy.$router.push("/");
      } else {
        console.log(message);
      }
    };

    const goto = () => {
      proxy.$router.push("login");
    };

    return () => (
      <>
        <el-row class={styles.echart}>
          <el-col sm={18}>LspChat</el-col>
          <el-col sm={4}>
            <h1>{proxy.$t("register.name")}</h1>
            <el-form>
              <el-form-item label={proxy.$t("register.username")}>
                <el-input type="text" vModel={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label={proxy.$t("register.password")}>
                <el-input
                  type="password"
                  vModel={user.value.password}
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onSubmit}>
                  {proxy.$t("button.register")}
                </el-button>
                <el-button type="info" onClick={goto}>
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
