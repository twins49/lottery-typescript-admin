export const isValidUsername = (str: string) =>
  /^[a-zA-Z0-9_-]{4,16}$/.test(str)

// 用户名正则，4到16位（字母，数字，下划线，减号）
export const isValidRegUsername = (str: string) =>
  /^[a-zA-Z0-9_-]{4,16}$/.test(str)

// 手机正则
export const isValidMobile = (str: string) =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str)

// 密码正则 最少8位，包括至少1个大写字母，1个小写字母，1个数字
export const isValidPassword = (str: string) =>
  /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/.test(str)

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
