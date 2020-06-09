import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

router.beforeEach(async (to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()
  // Determine whether the user has logged in
  if (UserModule.token) {
    // 有token了，去login页直接跳回去
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      console.log('to', to)
      // Check whether the user has obtained his permission roles
      // try {
      //   // Get user info, including roles
      // await UserModule.GetUserInfo()
      // Set the replace: true, so the navigation will not leave a history record
      // next({ ...to, replace: true })
      // } catch (err) {
      //   // Remove token and redirect to login page
      //   UserModule.ResetToken()
      //   Message.error(err || 'Has Error')
      //   // next(`/login?redirect=${to.path}`)
      //   NProgress.done()
      // }
      next()
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done()

  // set page title
  document.title = to.meta.title
})
