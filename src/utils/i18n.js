import { createI18n } from 'vue-i18n'
載入語言
import tw from '@/lang/zh-TW.json'
import cn from '@/lang/zh-CN.json'
import en from '@/lang/en-US.json'

const i18n = createI18n({
  legacy: false, //9.2.2版本不加會報錯
  locale: 'zh-TW', // 設定語言
  fallbackLocale: 'zh-TW', // 若選擇的語言缺少翻譯則退回的語言
  fallbackWarn: false,
  missingWarn: false,
  messages: {
    'en-US': en,
    'zh-TW': tw,
    'zh-CN': cn,
  },
})
export default i18n
