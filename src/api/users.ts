import Request from '@/utils/request'

export const getUserInfo = (token: string): any => Request.get(`users/123/`)

export const login = (data: any) => Request.post('login/', data)

export const logout = () => Request.post('users/logout')

export const registerUser = (data: any) => Request.post('users/', data)

export const sendverifyCode = (data: any) => Request.post('codes/', data)
