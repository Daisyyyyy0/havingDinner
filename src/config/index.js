import dayjs from 'dayjs'

// 語系
export const LANG = [
  { label: '繁中', key: 'zh-TW', value: 'tw' },
  { label: '简中', key: 'zh-CN', value: 'cn' },
  { label: 'English', key: 'en-US', value: 'en' },
]

// header
export const HEADER = [
  { name: '儲值', link: '/service/deposit', img: '/img/header/icon-qu1.png', },
  { name: '託售', link: '/service/withdraw', img: '/img/header/icon-cun1.png', },
  { name: '轉點', link: '/service/transfer', img: '/img/header/icon-z1.png', },
]

// 日期按鈕
export const DATE_BUTTON = [
    { label: '今日', startDate: dayjs().format('YYYY-MM-DDT00:00:00Z'), endDate: dayjs().format('YYYY-MM-DDT23:59:59Z'), },
    { label: '昨日', startDate: dayjs().subtract(1,'day').format('YYYY-MM-DDT00:00:00Z'), endDate: dayjs().subtract(1,'day').format('YYYY-MM-DDT23:59:59Z'), },
    { label: '本週', startDate: dayjs().startOf('week').add(1,'day').format('YYYY-MM-DDThh:mm:ssZ'), endDate: dayjs().endOf('week').add(1,'day').format('YYYY-MM-DDThh:mm:ssZ'), },
    { label: '上週', startDate: dayjs().add(-1, 'week').startOf('week').add(1, 'day').format('YYYY-MM-DDThh:mm:ssZ'), endDate: dayjs().add(-1, 'week').endOf('week').add(1, 'day').format('YYYY-MM-DDThh:mm:ssZ'), },
]

// 日期按鈕只有3個
export const DATE_BUTTON_THREE = [
    { label: '今日', startDate: dayjs().format('YYYY-MM-DDT00:00:00Z'), endDate: dayjs().format('YYYY-MM-DDT23:59:59Z'), },
    { label: '本週', startDate: dayjs().startOf('week').add(1,'day').format('YYYY-MM-DDThh:mm:ssZ'), endDate: dayjs().endOf('week').add(1,'day').format('YYYY-MM-DDThh:mm:ssZ'), },
    { label: '上週', startDate: dayjs().add(-1, 'week').startOf('week').add(1, 'day').format('YYYY-MM-DDThh:mm:ssZ'), endDate: dayjs().add(-1, 'week').endOf('week').add(1, 'day').format('YYYY-MM-DDThh:mm:ssZ'), },
]

// 金通通到驗證狀態
export const DEPOSIT_STATUS = [
    { id: 0, label: '關閉', },
    { id: 1, label: '正常', },
    { id: 2, label: '維護', },
    { id: 3, label: '會員銀行卡異常', },
    { id: 4, label: '須審核暱稱', },
    { id: 5, label: '須首存', },
]

// 社群
export const APP = [
  {
    name: 'tiktok',
    href: '',
    img: '/img/footer/social/social_tiktok.svg',
  }, {
    name: 'instagram',
    href: '',
    img: '/img/footer/social/social_instagram.svg',
  }, {
    name: 'youtube',
    href: '',
    img: '/img/footer/social/social_youtube.svg',
  }, {
    name: 'facebook',
    href: '',
    img: '/img/footer/social/social_facebook.svg',
  }, {
    name: 'twitter',
    href: '',
    img: '/img/footer/social/social_twitter.svg',
  },
]

// error code
export const ERROR_CODE = [
    { code: "501", msg:"會員等級重複", },
    { code: "1000", msg: "成功", },
    { code: "1001", msg: "成功-無異動", },
    { code: "2000", msg: "格式錯誤", },
    { code: "2001", msg: "資料綁定", },
    { code: "2002", msg: "資料重複", },
    { code: "2003", msg: "資料錯誤", },
    { code: "2004", msg: "資料數量限制", },
    { code: "2005", msg: "未達標準", },
    { code: "2006", msg: "未達標準-餘額不符", },
    { code: "2007", msg: "無權限", },
    { code: "2900", msg: "黑名單", },
    { code: "2996", msg: "黑名單-電話", },
    { code: "2997", msg: "黑名單-IP", },
    { code: "2998", msg: "黑名單-帳號", },
    { code: "2999", msg: "黑名單-personal", },
    { code: "3002", msg: "遊戲維護中", },
    { code: "3004", msg: "金額不足", },
    { code: "3005", msg: "取款失敗", },
    { code: "3006", msg: "轉點失敗", },
    { code: "3011", msg: "賬號重複", },
    { code: "3012", msg: "代理域名重複", },
    { code: "3013", msg: "超出限制代理層級", },
    { code: "3014", msg: "查無管理員", },
    { code: "3015", msg: "查無代理商", },
    { code: "3016", msg: "必須流水小於派發金額", },
    { code: "3017", msg: "代理商餘額不足", },
    { code: "3018", msg: "郵箱重複", },
    { code: "3019", msg: "手機號碼重複", },
    { code: "3021", msg: "IP 重複", },
    { code: "3022", msg: "新舊密碼相同", },
    { code: "3023", msg: "舊密碼錯誤", },
    { code: "3024", msg: "支付密碼錯誤", },
    { code: "3025", msg: "銀行賬號重複", },
    { code: "3026", msg: "新舊支付密碼相同", },
    { code: "3027", msg: "字串含有符號或中文", },
    { code: "3028", msg: "會員銀行卡異常", },
    { code: "3031", msg: "賬號重複未開通", },
    { code: "3057", msg: "微信code重複", },
    { code: "3999", msg: "資料重複-personal", },
    { code: "4000", msg: "遊戲維護", },
    { code: "4001", msg: "玩家禁止使用", },
    { code: "4002", msg: "玩家該遊戲禁止使用", },
    { code: "4003", msg: "代理該遊戲禁止使用", },
    { code: "4401", msg: "會員密碼錯誤", },
    { code: "4403", msg: "會員帳號停用", },
    { code: "4404", msg: "會員帳號不存在", },
    { code: "4405", msg: "會員帳號簡訊驗證碼未通過", },
    { code: "4423", msg: "會員帳異常", },
    { code: "4424", msg: "會員帳號登入錯誤過多", },
    { code: "5000", msg: "請求太頻繁", },
    { code: "6001", msg: "驗證過期", },
    { code: "9504", msg: "超时", },
    { code: "9999", msg: "失敗" },
]