## angular中后台种子项目

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
