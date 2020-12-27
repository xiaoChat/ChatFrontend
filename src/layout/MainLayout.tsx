import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
  render() {
    return (
      <>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </>
    );
  },
});
