import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(sidebarStatusKey, sidebarStatus)

// User
const tokenKey = 'user_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string, config: any = {}) =>
  Cookies.set(tokenKey, token, config)
export const removeToken = () => Cookies.remove(tokenKey)
