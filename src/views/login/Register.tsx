import Message from 'element-plus/lib/el-message';
import { defineComponent, ref } from "vue";
import router from '@/router';
import { register } from '@/api';
import { UserData } from '@/api/interface/user';
import { setAuthority } from '@/utils/authority';

export default defineComponent({
  name: 'Login',
  setup() {
    const user = ref<UserData>({
      username: '',
      password: '',
    });

    const onSubmit = async () => {
      const { code, message, data } = await register(user.value);
      if (code == 0) {
        setAuthority(data.token, data.userinfo);
        router.push('/');
      } else {
        Message.error(message)
      }
    }

    const goto = () => {
      router.push('login')
    }

    return () => (
      <>
        <el-row>
          <el-col sm={18}>
            LspChat
          </el-col>
          <el-col sm={4}>
            <h1>注册</h1>
            <el-form>
              <el-form-item label="用户名">
                <el-input type="text" vModel={user.value.username}></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" vModel={user.value.password}></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" onClick={onSubmit}>注册</el-button>
                <el-button type="info" onClick={goto}>返回</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </>
    )
  },
});
