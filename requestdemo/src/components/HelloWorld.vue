<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>登录用户是：{{ adminInfo.login }}</h3>
    <div id="" class="dataContainer">
    	<p v-for="(item, index) in systemConfigData" :key="index">
    		{{ item.name }}-{{ item.key }}-{{ item.value }}-{{ item.modify }}
    	</p>
    </div>
  </div>
</template>

<script>
import {getSystemConfigInfo} from '../axios/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      systemConfigData: []
    }
  },
  created () {
  	this.getInfo ()
  },
  computed: {
  	adminInfo () {
  		return this.$store.state.admininfo
  	}
  },
  methods: {
  	getInfo (){
  		let self = this
  		let params = {
  			token: self.adminInfo.token // 这里用params对象来装请求的参数。
  		}
  		getSystemConfigInfo(params).then((res) => {
  			// 这里写请求后成功的处理
  			console.log('请求返回的是：', res)
  			if (res.result == 0) {
					self.systemConfigData = res.data
				} else {
					self.$message({type: 'error', message: res.msg})
				}
  		}).catch((err) => {
  			console.log('请求失败', err)
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
