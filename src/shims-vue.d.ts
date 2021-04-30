import {
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
} from "element-plus";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $alert: typeof ElMessageBox.alert;
    $confirm: typeof ElMessageBox.confirm;
    $loading: typeof ElLoading;
    $message: typeof ElMessage;
    $messageBox: typeof ElMessageBox;
    $msgbox: typeof ElMessageBox;
    $notify: typeof ElNotification;
    $prompt: typeof ElMessageBox.prompt;
  }
}
