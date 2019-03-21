export default {
  name: 'vue-form-table-render',
  functional: true,
  props: {
    render: Function,
    item: Object,
    index: Number
  },
  render: (h, ctx) => {
    const { render, item, index } = ctx.props
    return render(h, item, index)
  }
}
