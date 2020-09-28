# thoughtworks-test 需要跑mock-server来体验实际效果！

#  安装依赖
npm install

#  运行开发环境
npm run serve

#  打包 - 生产环境
npm run build


# 功能：
* env环境配置：本地开发 测试 预发布 生产环境
* eslint 集成 vue/recommended ，规范了一些常用的规则
* 代理，本地开发代理
* alias 别名设置，免去写相对路径烦恼
* 集成 css modules
* 自定义代码分块提高性能
* vuex modules 初始化demo
* 编辑器统一配置 .editorconfig
* .npmrc 设置国内镜像
* 集成 polyfill 配置，兼容低版本浏览器
* 自动发版： npm run tag
* 页面常规增删查功能
