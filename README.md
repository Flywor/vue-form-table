# vue-form-table
一个适用于渲染table格式的多行form表单组件

###
[在线演示](https://flywor.github.io/vue-form-table/dist/index.html " 在线演示")
[演示代码](https://flywor.github.io/vue-form-table/src/app.vue " 演示代码")

###
* 说明
由于组件属于源码实现方式共享，所以不单独发布npm安装包。

* 使用方式
自行下载相关代码文件到自己的项目里去，自由应用。

* 依赖项
组件依赖`async-validator`，请自行安装。

* 关于更新
后期应用过程中如果发现有bug或者更好的实现方式会主动更新，也欢迎提issue/pr

* 参数
```javascript
  // 双向绑定的数据源
  value: {
    default: () => [{}],
    type: Array
  },
  // 每一列的定义，详情参考demo
  fieldList: {
    default: () => [],
    type: Array
  },
  // 校验规则，详情参考demo
  rules: {
    default: () => { return {} },
    type: Object
  },
  // 具备给render出来的内容增加错误样式的样式类名，默认为iview组件库的form error class
  errorClass: {
    default: 'ivu-form-item-error',
    type: String
  },
  // 是否显示增加按钮
  showAdd: {
    default: true,
    type: Boolean
  }
```

* 如果你觉得不错，可以帮忙点个star表示支持，也可以请我喝杯冰阔落
![image](https://flywor.github.io/vue-form-table/images/wechart_pay.png)

* 联系方式
QQ和邮箱： 244406664
微信：
![image](https://flywor.github.io/vue-form-table/images/wechart.png)