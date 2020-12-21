import Message from 'element-plus/lib/el-message';
import { defineComponent, ref } from "vue";
import 'element-plus/lib/theme-chalk/index.css';
import { UserData } from '@/api/interface/data';

export default defineComponent({
  name: 'Login',
  setup() {
    const user = ref<UserData>({
      username: '',
      password: '',
    });
    const checkbox = ref<boolean>(true)

    const onSubmit = (v: MouseEvent) => {
      console.log(v)
      Message.success(`${user.value.username}: ${user.value.password}`)
    }

    const onReset = () => {
      user.value.username = ''
      user.value.password = ''
    }

    return () => (
      <>
        <el-checkbox vModel={checkbox.value}>啥玩意</el-checkbox>
        <el-form label-width="100px">
          <el-form-item label="用户名">
            <el-input type="text" vModel={user.value.username} autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" vModel={user.value.password} />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" onClick={onSubmit}>提交</el-button>
            <el-button onClick={onReset}>重置</el-button>
          </el-form-item>
        </el-form>
      </>
    )
  },
});
