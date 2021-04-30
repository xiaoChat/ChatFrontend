import { defineComponent } from "vue";
import BaseLayout from "./layout/BaseLayout";
import "./style/main.scss";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <BaseLayout />
      </>
    );
  }
});
