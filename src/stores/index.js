import { defineStore } from 'pinia'
import { ElMessageBox } from 'element-plus'
// import router from '@/router'
import { userApi, walletApi, loginApi, infoApi } from '@/api/index'
import i18n from '@/plugins/i18n.js'
import CryptoJS from '@/utils/crypto.js'
import { ERROR_CODE } from '@/config/index.js'

const { t } = i18n.global

export const useMainStore = defineStore({
  id: 'index',
  state: () => ({
    userInfo: {}, // 使用者資訊
    isCover: false, // 遮罩顯示與否
    announContent: [], // 系統公告
    myDisplay: false, // 遮罩顯示與否
    wallet: [],
    isDisplayMobileService: false
  }),
  getters: {
    // 使用者錢包
    mainWallet () {
      if (!this.wallet.length) return 0

      return this.wallet
        .find(item => item.game_id === 0)
        .game_balance ?? 0
    },
  },
  actions: {
    // 回傳錯誤訊息
    error(err) {
      if(err.data?.error_code) {
        switch(err.data.error_code) {
          case '2900':
          case '2996':
          case '2997':
          case '2998':
          case '2998':
            return  t('請聯繫客服') +'(Error:' + err.data.error_code + ')'
          default :
            return t(ERROR_CODE.find(item => item.code === err.data.error_code).msg) +'(Error:' + err.data.error_code + ')'
        }
      }
      else if(err.data?.message) return err.data.message + '(Error:' + err.data.code ?? '' + ')'
      else return t('請聯繫客服')
    },

    // 彈窗 => 參數帶法("標題", "內容", "按鈕文字", "style樣式(目前只寫了post)", "routerLink")
    // routerLink => 如有需轉跳直接帶轉跳router,只需重整頁面帶空值,啥都不用做帶"no"
    post(title, content, button, className, routerLink, url = false) {
      ElMessageBox.alert(
        t(content),
        t(title),
        {
          confirmButtonText: t(button),
          center: true,
          customClass :className,
          showClose: false,
          callback: () => {
            // 轉跳首頁
            if(routerLink === 'no') return // 啥都不做
            else if(routerLink === '') location.reload() // 當頁重整
            else if(url) window.open(routerLink)
            else router.push(routerLink) // router轉跳
          } 
        }
      )
    },

    // 登入
    async login (account, password, remember) {
      try{
        let target = await loginApi(account, password)
        localStorage.setItem('token', target.data.token)
        localStorage.setItem('userId', target.data.user_id)
        localStorage.setItem('remember', remember)
        // 記住密碼
        if(remember) {
            localStorage.setItem('account', CryptoJS.encrypt(account))
            localStorage.setItem('password', CryptoJS.encrypt(password))
        } else {
            localStorage.removeItem('account')
            localStorage.removeItem('password')
        }
        this.setUserInfo()
        router.push('/')
      } catch(err) {
          this.post('系統公告', this.error(err), '關閉', 'post', 'no')
      }
    },

    async setUserInfo () {
      if (!localStorage.getItem('token')) return false

      if (localStorage.getItem('userInfo')) this.userInfo = localStorage.getItem('userInfo')

      try {
        const response = await userApi()
        this.userInfo = response?.data || {}

        if (Object.keys(this.userInfo).length) localStorage.setItem('userInfo', JSON.stringify(response.data))
        else localStorage.removeItem('userInfo')
      } catch (err) {
        this.post('系統訊息', this.error(err), '關閉', 'post', '')
      }
    },

    async setWallet () {
      if (!localStorage.getItem('token')) return false

      if (localStorage.getItem('wallet')) this.wallet = localStorage.getItem('wallet')

      try {
        const response = await walletApi()
        this.wallet = response?.data || []
      } catch (err) {
        this.post('系統訊息', this.error(err), '關閉', 'post', '')
      }
    },

    async app(url = false) {
      try {
        let target = await infoApi()
        if(url) return target.data.site_app_download_url
        let newWindow = window.open(import.meta.env.BASE_URL + 'loading.html', '_blank')
        newWindow.opener = null
        newWindow.location.href = target.data.site_app_download_url
      } catch(err) {
          main.post('系統訊息', main.error(err), '關閉', 'post', '')
      }
    },

    // 登出
    signOutAction () {
      // 排除不刪除的內容
      const excludeKeyList = [
        'noticeOpen',
        'account',
        'password',
        'login',
        'locale',
        'remember',
      ]

      const keyList = Object
        .keys(localStorage)
        .filter(item => !excludeKeyList.includes(item))
  
      for (const item of keyList) localStorage.removeItem(item)
      router.push('/')
      this.setDefault()
    },

    setDisplayMobileService (bol = false) {
      this.isDisplayMobileService = bol
    },

    // 初始化
    setDefault () {
      this.userInfo = {}
      this.wallet = []
    },
  },
})
