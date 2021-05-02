import { login, register } from "@/api";
import { UserData } from "@/api/interface/user";
import { setAuthority } from "@/utils/authority";
import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  getCurrentInstance,
  onMounted,
  ref
} from "vue";

export default function getUserComposables() {
  const proxy = (getCurrentInstance() as ComponentInternalInstance)
    .proxy as ComponentPublicInstance;

  const user = ref<UserData>({
    username: "",
    email: "",
    password: ""
  });

  const rules = ref();

  onMounted(() => {
    rules.value = {
      username: [
        {
          required: true,
          message: proxy.$t("rule.username.required"),
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: proxy.$t("rule.password.required"),
          trigger: "blur"
        }
      ]
    };
    console.log("user init");
  });

  const onSubmitLogin = async () => {
    const { code, message, data } = await login(user.value);
    if (code == 200) {
      setAuthority(data.token, data.userinfo);
      proxy.$router.push("/home");
    } else {
      proxy.$message.error(message);
    }
  };

  const gotoRegister = () => {
    proxy.$router.push("register");
  };

  const onSubmitRegister = async () => {
    const { code, message, data } = await register(user.value);
    if (code == 0) {
      setAuthority(data.token, data.userinfo);
      proxy.$router.push("/");
    } else {
      proxy.$message.error(message);
    }
  };

  const gotoLogin = () => {
    proxy.$router.push("login");
  };

  return {
    proxy,
    user,
    rules,
    onSubmitLogin,
    onSubmitRegister,
    gotoRegister,
    gotoLogin
  };
}
