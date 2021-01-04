# vue-v2

## 安装依赖
```
npm install
```

### 运行
```
npm run serve
```

### 打包
```
npm run build
```

### 插件

####  样式ui

 element-ui  [点击](https://element.eleme.cn/#/zh-CN/component/installation)

#### 时间格式

moment点击右边解析 [moment](http://momentjs.cn/docs/#/parsing/)

用法

```
this.$moment......
```





### 更换主题色

下载对应主题色替换路径下 index.css即可

```javascript
src\assets\css\theme-green
```

### 通用class

全局通用样式文件

```
src\assets\css\main.scss
```

- clean 清除浮动
- beyondHidden 单行超出隐藏

### 全局css变量

定义全局通用样式

``` 
src\assets\css\Curreny.scss
```

### 菜单配置

```
src\components\Silder.vue
里面的 menuList
```

###  vuex

```
src\store\modules
模块vuex文件建在里面  
命名空间已打开
```

### 配置

```
src\utils\stacts.js  接口及=基地址与其他配置
```



### 接口调用



#### 添加接口

```
src\apis\tests\tests.js

```

#### 接口使用

```js
import { 接口名字 } form ”src\apis\tests\tests.js“;
```

