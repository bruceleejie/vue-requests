<template>
  <div class="loginContainer">
    <el-form autoComplete="on"
			:model="loginForm" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
			<h3 class="title">系统登录</h3>
			<el-form-item prop="username">
				<i class="fa fa-user"></i>
				<el-input name="username" type="text" v-model="loginForm.username" autoComplete="off" placeholder="用户名">
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<i class="fa fa-lock"></i>
				<el-input name="password" type="password" @keyup.enter.native="handleLogin"
					 v-model="loginForm.password" autoComplete="off" placeholder="密码">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%;" @click="handleLogin">
					登录
				</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    handleLogin () {
      let self = this
      let data = {
        login: self.loginForm.username,
        password: self.loginForm.password,
        role: 10
      }
      self.$store.dispatch('adminLogin', {
        data,
        successCallback: () => {
          // 请求成功回调函数
          self.$router.push({path: '/helloworld'})
        },
        failCallback: () => {
        	// 请求失败回调函数
        },
      })
    }
  }
}
</script>
<style>
.loginContainer {
  width: 100%;
  height: 100%;
  background: url('assets/bg-login.png') no-repeat center;
  background-size: cover;
  position: relative;
}
.loginContainer .login-form {
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 200px);
  width: 400px;
  padding: 35px 35px 15px 35px;
}
.login-form .title {
  color: #fff;
  text-align: center;
}
</style>

