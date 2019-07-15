# vue-requests
vue项目中用vuex和不用vuex的一些请求方法。公司项目总结经验

1、在vue项目中使用要请求接口，需要安装axios、vuex依赖

2、在请求接口前需要先在项目的src/config下的index.js文件中找到“proxyTable: {}”这行代码，在里面配置成自己后端提供的请求url地址。
