import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import {fetch} from '@/axios/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    admininfo: {}
  },
  mutations: {
    saveUser (state, obj) {
      state.admininfo = obj
    }
  },
  actions: {
    adminLogin ({commit,state}, options) {
      console.log('请求是:', options)
      return fetch('POST', '/api/user/login', options.data || {}).then(res => {
        console.log('请求返回', res)
        if (res.result === 0) {
          // 存储到vuex中，TODO
          commit('saveUser', res.data)
          // 成功返回
          options.successCallback()
        } else {
          // 失败返回
          options.failCallback()
        }
      }).catch(err => {
        console.log('失败返回', err)
      })
    }
  }
})

export default store;