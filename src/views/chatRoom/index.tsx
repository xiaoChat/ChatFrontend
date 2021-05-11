import { defineComponent } from "vue";
import ConversionList from "./components/conversionList";
import styles from "./Index.module.scss";
export default defineComponent({
  name: "chatRoom",
  data() {
    return {
      name: "Yexk"
    };
  },
  render() {
    return (
      <div class={styles["chatRoom"]}>
        <div class={styles["chatRoom-main"]}></div>
      </div>
    );
  }
});
