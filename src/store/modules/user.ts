import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import { login, logout, getUserInfo, registerUser } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import store from '@/store'
import settings from '@/config/settings'

export interface UserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  id: number
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
  public id = 0
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_USER_INFO(userInfo: any) {
    this.id = userInfo.id
    this.name = userInfo.username
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Action({ rawError: true })
  public async Register(userInfo: {
    username: string
    password: string
    mobile: string
    verificationCode: string
  }) {
    const { password, mobile, verificationCode } = userInfo
    const username = userInfo.username.trim()
    try {
      const data = await registerUser({
        username,
        password,
        mobile,
        code: verificationCode,
      })
      const { token } = data
      setToken(token, {
        expires: Number(settings.JWT_REFRESH_EXPIRATION_DELTA),
      })
      this.SET_TOKEN(token)
      return token
    } catch (error) {
      return error
    }
  }

  @Action
  public async Login(userInfo: { username: string; password: string }) {
    const { password } = userInfo
    const userName = userInfo.username.trim()
    let loginResult = false
    try {
      const { token, id, username } = await login({
        username: userName,
        password,
      })
      setToken(token) // 把token设置到cookie中
      this.SET_TOKEN(token) // 把token 设置到 vuex 中
      this.SET_USER_INFO({ id, username })
      loginResult = true
    } catch (error) {
      console.log('Login', error)
      // 要不要清除一下token
      return loginResult
    }
    return loginResult
  }

  @Action
  public ResetToken() {
    // 删除cookie vue_typescript_admin_access_token
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const data = await getUserInfo()
    console.log('GetUserInfo', data)
    // if (!data) {
    //   throw Error('Verification failed, please Login again.')
    // }
    // const { roles, name, avatar, introduction } = data.user
    // roles must be a non-empty array
    // if (!roles || roles.length <= 0) {
    //   throw Error('GetUserInfo: roles must be a non-null array!')
    // }
    // this.SET_ROLES(roles)
    // this.SET_NAME(name)
    // this.SET_AVATAR(avatar)
    // this.SET_INTRODUCTION(introduction)
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    // 接口退出
    await logout()
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserModule = getModule(User)
