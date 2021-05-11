import { defineComponent } from "vue";
import ConversionList from "./components/conversationList";
import Conversion from "./components/conversation";
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
        <div class={styles["chatRoom-main"]}>
          <ConversionList class={styles["chatRoom-main-l"]} />
          <Conversion class={styles["chatRoom-main-r"]} />
        </div>
      </div>
    );
  }
});
