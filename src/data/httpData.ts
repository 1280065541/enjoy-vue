//该文件主要用于配置静态常量

// 权限错误码，需要跳转回登录页面的状态码
export const AUTH_ERROR_CODE_LIST = [10004, 10005]
// 需要跳过统一处理code的接口列表
export const SPECIAL_URL_LIST = [
    '/user/file/order',
    '/download/template/os',
    '/user/file/log',
    '/download/template/order/add',
    '/download/template/order/del',
    '/download/template/copyright',
    '/user/file/list'
]
