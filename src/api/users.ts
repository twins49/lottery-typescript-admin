import Request from '@/utils/request'

export const getUserInfo = (data: any): any => Request.post('/users/info', data)

export const login = (data: any) => Request.post('/users/info', data)

export const logout = () => Request.post('/users/logout')
