<template>
  <div class="register-container">
    <el-form
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="register-from"
      autocomplete="on"
      label-position="left"
    >
      <div class="register-from__title-container">
        <h3 class="register-from__title-container title">
          register Form
        </h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input
          ref="username"
          v-model="registerForm.username"
          name="username"
          type="text"
          autocomplete="on"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon name="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="registerForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          autocomplete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :name="passwordType === 'password' ? 'eye-off' : 'eye-on'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon name="mobile" />
        </span>
        <el-input
          ref="mobile"
          v-model="registerForm.mobile"
          name="mobile"
          type="text"
          autocomplete="on"
          placeholder="手机号码"
        />
      </el-form-item>
      <el-form-item prop="verificationCode">
        <el-input
          v-model="registerForm.verificationCode"
          placeholder="请输入验证码"
          class="code-input"
          ref="verificationCode"
        ></el-input>
        <el-button
          @click="sendCode"
          type="success"
          style="display: inline-block;min-width: 112px;"
          :disabled="(disabled = !show)"
        >
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{ count }} s</span>
        </el-button>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%; margin-bottom:30px;"
        @click.native.prevent="handleRegister"
      >
        注册
      </el-button>
      <div style="position:relative">
        <div class="tips">
          <span class="register-box" @click="goToLogin">已有账号？请登录</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { sendverifyCode } from '@/api/users'
import { Component, Vue } from 'vue-property-decorator'
import { Form as ElForm, Input, MessageBox } from 'element-ui'
import { isValidRegUsername, isValidMobile } from '@/utils/validate'
import { UserModule } from '@/store/modules/user'

const TIME_COUNT = 60 //更改倒计时时间

@Component({
  name: 'Register',
})
export default class extends Vue {
  /* methods */
  private validateRegUsername = (
    rule: any,
    value: string,
    callback: Function,
  ) => {
    if (!isValidRegUsername(value)) {
      callback(new Error('用户名请输入4到16位（字母，数字，下划线，减号）'))
    } else {
      callback()
    }
  }

  private validateMobile = (rule: any, value: string, callback: Function) => {
    if (!isValidMobile(value)) {
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  }

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 8) {
      callback(new Error('密码不能少于8位数'))
    } else {
      callback()
    }
  }

  private async sendCode() {
    if (!this.timer) {
      this.count = TIME_COUNT
      this.show = false
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--
        } else {
          this.show = true
          clearInterval(this.timer) // 清除定时器
          this.timer = null
        }
      }, 1000)
      await sendverifyCode({
        mobile: this.registerForm.mobile,
      })
    }
  }

  private handleRegister() {
    ;(this.$refs.registerForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true
        const token = await UserModule.Register(this.registerForm)
        if (!token || typeof token === 'object') {
          MessageBox.confirm('注册失败了, 请重新注册', '确定注册', {
            confirmButtonText: '重新注册',
            // cancelButtonText: '取消',
            type: 'warning',
          }).then(
            () => {
              location.reload()
            },
            () => {
              location.reload()
            },
          )
        } else {
          this.$router.push('/login')
        }
      } else {
        return false
      }
    })
  }

  private goToLogin() {
    this.$router.push({ path: '/login' })
  }

  /* data */
  private show = true // 初始启用按钮
  private count = 0 // 初始化次数
  private timer: any = null
  private passwordType = 'password'
  private loading = false

  private registerForm = {
    username: '',
    mobile: '',
    password: '',
    verificationCode: '', // 验证码
  }

  private registerRules = {
    username: [{ validator: this.validateRegUsername, trigger: 'blur' }],
    mobile: [{ validator: this.validateMobile, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }],
  }

  private showPwd() {
    if (this.passwordType === 'password') {
      this.passwordType = ''
    } else {
      this.passwordType = 'password'
    }
    this.$nextTick(() => {
      ;(this.$refs.password as Input).focus()
    })
  }
}
</script>

<style lang="scss">
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .code-input {
    width: 75%;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
    .register-box {
      cursor: pointer;
      color: $registerColor;
    }
  }
}
</style>

<style scoped lang="scss">
.register-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2d3a4b;
  .register-from {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    &__title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: #eee;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $darkGray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
  }
}
</style>
