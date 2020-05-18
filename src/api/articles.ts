import Request from '@/utils/request'

export const getArticles = (params: any): any =>
  Request.get('/articles', params)
