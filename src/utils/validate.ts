export const isValidUsername = (str: string) =>
  ['admin', 'editor'].indexOf(str.trim()) >= 0

// 用户名正则，4到16位（字母，数字，下划线，减号）
export const isValidRegUsername = (str: string) =>
  /^[a-zA-Z0-9_-]{4,16}$/.test(str)

// 手机正则
export const isValidMobile = (str: string) =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str)

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
