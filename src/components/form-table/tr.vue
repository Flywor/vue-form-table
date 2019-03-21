<template>
  <tr>
    <td
      v-for="(filed, i) in fieldList"
      :key="`form-table-tr-${index}-${i}`"
      :style="{ textAlign: filed.align || 'left' }"
      :class="(item.errors && item.errors[filed.prop])? errorClass: ''"
    >
      <label v-if="filed.type === 'index'">{{index + 1}}</label>
      <RenderComp v-else-if="filed.render" :render="filed.render" :item="item" :index="index"/>
      <label v-else>{{item[filed.prop] || filed.default}}</label>
    </td>
  </tr>
</template>
<script>
import RenderComp from './render'
export default {
  name: 'form-table-tr',
  components: { RenderComp },
  props: {
    item: {
      default: () => { return {} },
      type: Object
    },
    index: {
      default: -1,
      type: Number
    },
    fieldList: {
      default: () => [],
      type: Array
    },
    errorClass: {
      default: 'ivu-form-item-error',
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
