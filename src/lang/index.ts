import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
import en from "./en";
import cn from "./zh-cn";

const messages: LocaleMessages<VueMessageType> = {
    [enLocale.name]: {
        el: enLocale.el,
        ...en
    },
    [zhLocale.name]: {
        el: zhLocale.el,
        ...cn
    },
    testLocale: {
        el: {}
    }
};

export default createI18n({
    locale: zhLocale.name,
    fallbackLocale: enLocale.name,
    messages
});
