import Request from '@/utils/request'

export const getUserInfo = (data: any): any => Request.post('users/info', data)

export const login = (data: any) => Request.post('users/info/', data)

export const logout = () => Request.post('users/logout')

export const registerUser = (data: any) => Request.post('users/', data)

export const sendverifyCode = (data: any) => Request.post('codes/', data)
