<template>
  <div id="app">
    <FormTable :fieldList="fieldList" v-model="listData" :rules="rules" ref="formTable"/>
    <br />
    <Button @click="importData">绑定数据</Button>
    &nbsp;
    <Button @click="doValidate">校验</Button>
    &nbsp;
    <Button type="primary" @click="getData">获取数据</Button>
    &nbsp;
    <Button type="error" @click="doClear">清空</Button>
  </div>
</template>

<script>
import FormTable from './components/form-table'
export default {
  name: 'demo',
  components: { FormTable },
  data () {
    return {
      fieldList: [
        {
          type: 'index',
          title: '序号'
        }, {
          title: '文本',
          prop: 'text',
          default: '默认值'
        }, {
          title: 'render且带校验的字段',
          prop: 'select',
          render: (h, row, index) => {
            return (<Select v-model={row.select}>
              <Option value="1">选项1</Option>
              <Option value="2">选项2</Option>
            </Select>)
          }
        }, {
          title: '输入框',
          prop: 'input',
          render: (h, row, index) => {
            return (<Input v-model={row.input} onon-keyup={e => {
              this.$set(row, 'input', e.target.value)
            }}/>)
          }
        }, {
          title: '设置了width的字段',
          width: '140px',
          prop: 'width',
          default: '宽度默认值'
        }, {
          title: '设置了align的字段',
          align: 'center',
          render: (h, row, index) => {
            return (<Icon type="logo-android" size="24"/>)
          }
        }, {
          title: '操作',
          align: 'center',
          render: (h, row, index) => {
            return (<div>
              <Button type="primary" size="small" onClick={e => {
                this.$set(row, 'text', '被按钮修改过了')
                this.$set(row, 'input', '被按钮修改过了')
                this.$set(row, 'select', '1')
              }}>
                修改值
              </Button>
              <Button type="error" style="margin-left: 8px;" size="small" onClick={e => {
                this.$delete(this.listData, index)
              }}>
                删除
              </Button>
            </div>)
          }
        }
      ],
      rules: {
        select: [{ required: true }],
        input: [{ required: true }]
      },
      listData: []
    }
  },
  methods: {
    importData () {
      const temp = []
      for (let i = 0; i < 10; i++) {
        temp.push({
          text: '加载了默认文本',
          input: `第${i}行`,
          select: '1',
          width: '宽度140px'
        })
      }
      this.listData = temp
    },
    async doValidate () {
      const flag = await this.$refs.formTable.validate()
      if (flag) {
        this.$Message.success('校验通过')
      } else {
        this.$Message.error('校验失败')
      }
    },
    getData () {
      console.log(this.listData)
    },
    doClear () {
      this.listData = []
    }
  }
}
</script>
<style lang="less">
html, body{
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  padding: 4%;
  *{
    font-size: 14px;
  }
}
</style>
