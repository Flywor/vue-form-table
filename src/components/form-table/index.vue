<template>
  <div class="form-table">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <template v-for="field in fieldList">
            <th :key="field.title" :width="field.width" :style="{ textAlign: field.align || 'left' }">
              <i v-if="rules[field.prop] && (rules[field.prop].required || rules[field.prop].filter(f => f.required).length)">*</i>
              {{field.title || '#'}}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in value">
          <TableTR
            :key="`form-table-${index}`"
            :index="index"
            :item="item"
            :fieldList="fieldList"
            :errorClass="errorClass"
          />
        </template>
      </tbody>
    </table>
    <p v-if="showAdd" @click="value.push({})">增加一行</p>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import TableTR from './tr'
export default {
  name: 'form-table',
  components: { TableTR },
  props: {
    fieldList: {
      default: () => [],
      type: Array
    },
    value: {
      default: () => [{}],
      type: Array
    },
    rules: {
      default: () => { return {} },
      type: Object
    },
    errorClass: {
      default: 'ivu-form-item-error',
      type: String
    },
    showAdd: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  watch: {
    value: {
      deep: true,
      handler (newData) {
        this.$emit('input', newData)
      }
    }
  },
  mounted () {
    if (!this.value || !this.value.map || this.value.length === 0) {
      this.$emit('input', [{}])
    }
  },
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        const validator = new AsyncValidator(this.rules)
        const data = this.value
        let flag = true
        data.map((item, index) => {
          validator.validate(item, (errors, fileds) => {
            if (errors) {
              flag = false
              this.$set(item, 'errors', fileds)
            } else {
              this.$delete(item, 'errors')
            }
          })
        })
        resolve(flag)
      })
    }
  }
}
</script>
<style lang="less">
@import url('./index.less');
</style>
