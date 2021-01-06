<template>
  <div class='login-container'>
    <!-- 、导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录"/>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field name="手机号" v-model='user.mobile'
        placeholder="请输入手机号" >
    <i slot='left-icon' class='toutiao toutiao-shouji'></i>
      </van-field>
      <van-field
        v-model='user.code'
        name="验证码"
        placeholder="请输入验证码" >
      <i slot='left-icon' class='toutiao toutiao-yanzhengma'></i>
      <template #button>
    <van-button size="small" class='send-sms-btn' round type="primary">发送验证码</van-button>
  </template>
      </van-field>

      <!-- 登录按钮 -->
      <div style="margin: 16px" class='login-btn-wrap'>
        <van-button block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '15827388005',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await login(this.user)
        console.log('登录成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或者验证码错误')
        } else {
          console.log('登录失败', err)
        }
      }
    }
  }
}
</script>
<style lang="less">
.login-container{
   .toutiao{
       font-size: 37px;
   }
   .send-sms-btn{
       width: 152px;
       height:46px;
       line-height:46px;
       border:none;
       background-color: #ededed;
       font-size:22px;
       color:#666;
   }
   .login-btn-wrap{
     padding:53px 33px ;
   }
}
</style>
