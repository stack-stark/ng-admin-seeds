## 这是一个基于angular9和ng-zorro,ngrx的种子项目,并使用及封装了很多常用第三方组件/管道/方法等,方便快速入门学习angular开发以及上手业务开发

### 用到的包
包 | 版本
-|-
@angular | ^9.0.5
@ngrx/store | ^9.1.0
ng-zorro-antd | ^9.1.0
lodash | ^4.17.15
@antv/g2plot | ^1.0.4
### 运行
``` bash
npm i
npm start
```
默认端口 3800

### 开发时代理
默认拦截`/api/`请求,代理到本地,需要可自行修改`proxy.conf.json`文件
