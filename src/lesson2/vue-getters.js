export default class {
  // opt.el - selector
  // opt.template - html
  // opt.data - data for template
  constructor (opt) {
    this.$el = document.querySelector(opt.el)
    this.$template = opt.template
    this.$data = opt.data

    for (const name in this.$data) {
      Object.defineProperty(this, name, {
        get () {
          return this.$data[name]
        },
        set (value) {
          this.$data[name] = value
          this.render()
        }
      })
    }

    this.render()
  }

  render () {
  	this.$el.innerHTML = this.$template.replace(/{{(.+?)}}/g, (match, name) => {
      const key = name.trim()
      return this[key]
    })
  }
}
