import HelloWorld from "@/components/HelloWorld"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <>
        <div class="home">
          <img alt="Vue logo" src={require("@/assets/logo.jpg")} />
          <HelloWorld msg="Yexk Home" />
        </div>
      </>
    );
  }
});
