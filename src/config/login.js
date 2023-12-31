import CryptoJS from '@/utils/crypto.js'

export const MENU =  [
    {
        id: 'login',
        label: '登入',
        tag: '註冊',
        field: [
            {
                id: 'account',
                icon: '/img/login/new_icon_name.png',
                type: 'text',
                placeholder: '帳號',
                content: CryptoJS.decrypt(localStorage.getItem('account') ?? ''),
                check: CryptoJS.decrypt(localStorage.getItem('account') ?? '') ? true : false,
                tip: '',
            },
            {
                id: 'password',
                icon: '/img/login/new_icon_password.png',
                type: 'password',
                placeholder: '密碼',
                content: CryptoJS.decrypt(localStorage.getItem('password') ?? ''),
                check: CryptoJS.decrypt(localStorage.getItem('password') ?? '') ? true : false,
                tip: '',
                hide: true,
            },
        ],
        button: [
            { id: 'index', label: '先去逛逛', type: 'blue', },
            { id: 'login', label: '登入', type: 'green', },
        ],
    },
    {
        id: 'register',
        label: '註冊',
        tag: '登入',
        field: [
            {
                id: 'phone',
                icon: '/img/login/new_icon_phone.png',
                type: 'text',
                placeholder: '請輸入手機號碼',
                content: '',
                check: false,
                tip: '',
            },
            {
                id: 'code',
                icon: '/img/login/new_icon_code.png',
                type: 'text',
                placeholder: '請輸入驗證碼',
                content: '',
                check: false,
                tip: '',
            },
            {
                id: 'account',
                icon: '/img/login/new_icon_name.png',
                type: 'text',
                placeholder: '帳號',
                content: '',
                check: false,
                tip: '',
            },
            {
                id: 'password',
                icon: '/img/login/new_icon_password.png',
                type: 'password',
                placeholder: '密碼',
                content: '',
                check: false,
                tip: '',
                hide: true,
            },
            {
                id: 'check',
                icon: '/img/login/new_icon_password.png',
                type: 'password',
                placeholder: '確認密碼',
                content: '',
                check: false,
                tip: '',
                hide: true,
            },
            {
                id: 'line',
                icon: '/img/login/icon-line.svg',
                type: 'text',
                placeholder: 'Line',
                content: '',
                check: true,
                tip: '',
            },
        ],
        button: [
            { id: 'register', label: '註冊', type: 'green', },
        ],
    },
    {
        id: 'forget',
        label: '返回',
        tag: '忘記密碼',
        field: [
            {
                id: 'phone',
                icon: '/img/login/new_icon_password.png',
                type: 'text',
                placeholder: '請輸入手機號碼',
                content: '',
                check: false,
                tip: '',
            },
        ],
        button: [
            { id: 'service', label: '聯絡客服', type: 'blue', },
            { id: 'forget', label: '送出', type: 'green', },
        ],
    },
]