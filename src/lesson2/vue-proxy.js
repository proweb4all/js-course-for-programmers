export default class {
  // opt.el - selector
  // opt.template - html
  // opt.data - data for template
  constructor (opt) {
    this.$el = document.querySelector(opt.el)
    this.$template = opt.template
    this.$data = opt.data
    const $self = this

    this.data = new Proxy(this.$data, {
      get (target, name) {
        return target[name]
      },
      set (target, name, value) {
        target[name] = value
        $self.render()
        return true
      }
    })

    this.render()
  }

  render () {
    this.$el.innerHTML = this.$template.replace(/{{(.+?)}}/g, (match, name) => {
      const key = name.trim()
      return this.data[key]
    })
  }
}
