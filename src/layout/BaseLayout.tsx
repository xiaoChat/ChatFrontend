import { defineComponent } from "vue";

export default defineComponent({
  name: "Base",
  render() {
    return (
      <>
        <el-container>
          <el-header>A</el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </>
    );
  }
});
