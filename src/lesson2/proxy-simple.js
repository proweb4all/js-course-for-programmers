const some = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}

const someP = new Proxy(some, {
  get (target, name) {
    console.log(target, name)
    return target[name]
  },
  set (target, name, value) {
    console.log(target, name, value)
    target[name] = value
    return true
  }
})

someP.c.d = 10
