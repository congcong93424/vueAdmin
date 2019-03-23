import { postMethods, getMethods } from './axios'


export default {
    // 登陆地址
    login: params => postMethods('/mock/login',params),
    crmpage: () => getMethods('/mock/crmpage')
}