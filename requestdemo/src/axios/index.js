import axios from 'axios'

export let fetch = (method, url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      data: data,
      method: method,
      url: url,
      timeout: 10000,
      headers: {
				'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    }).then(response => {
      console.log('response', response)
      resolve(response.data)
    }).catch(err => {
      console.log('err.response', err.response)
      reject(err)
    })
  })
}

// 查询系统配置信息
export let getSystemConfigInfo = (data) => {
  return fetch('POST', '/api/option/query', data)
}
