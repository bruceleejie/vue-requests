# vue-requests
vue项目中用vuex和不用vuex的一些请求方法。公司项目总结经验

1、在vue项目中使用要请求接口，需要安装axios、vuex依赖

2、在请求接口前需要先在项目的src/config下的index.js文件中找到“proxyTable: {}”这行代码，在里面配置成自己后端提供的请求url地址。

3、在这个项目中安装完了store之后记得要在main.js文件中引入store。

4、在本demo中，我在登录模块用了vuex封装的请求方式（dispatch），在获取信息的helloworld.vue中，我用了简单的axios请求。

5、登录请求的相关文件有（main.js、store文件夹、axios文件夹、login.vue）

6、获取信息请求的相关文件有（helloworld.vue、axios文件夹）
