import { defineComponent } from "vue";
import styles from "./Index.module.scss";

import "highlight.js/styles/github.css";

export default defineComponent({
  name: "ChatMessage",
  props: {
    isSelf: {
      type: Boolean,
      default: () => false
    },
    // TODO 消息类型
    messageType: {
      type: String
    },
    avatar: {
      type: String
    },
    title: {
      require: true,
      type: String
    },
    name: {
      require: true,
      type: String
    },
    msg: {
      type: String
    }
  },
  setup(props, { slots }) {
    return () => {
      const _body = props.msg ? (
        <p class={styles.content} v-html={props.msg}></p>
      ) : (
        <p class={styles.content}>{slots.default?.()}</p>
      );
      return props.isSelf ? (
        <div class={[styles.msg, styles.self]}>
          <div class={styles.box}>
            <div class={styles.name}>
              <span>{props.name}</span>
              <span>{props.title}</span>
            </div>
            {_body}
          </div>
          <div class={styles.avatar}>
            <el-avatar shape="square" size={32} src={props.avatar}>
              {(props.name as string).substr(0, 1)}
            </el-avatar>
          </div>
        </div>
      ) : (
        <div class={styles.msg}>
          <div class={styles.avatar}>
            <el-avatar shape="square" size={32} src={props.avatar}>
              {(props.name as string).substr(0, 1)}
            </el-avatar>
          </div>
          <div class={styles.box}>
            <div class={styles.name}>
              <span>{props.title}</span>
              <span>{props.name}</span>
            </div>
            {_body}
          </div>
        </div>
      );
    };
  }
});
