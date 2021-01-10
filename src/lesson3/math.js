const sum = (a, b) => a + b
const mult = (a, b) => a * b
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('divide by zero')
  }

  return a / b
}

const mathOp = (a, b, op) => {
  let res

  switch (op) {
    case 'sum':
      res = sum(a, b)
      break
    case 'mult':
      res = mult(a, b)
      break
    case 'div':
      res = divide(a, b)
      break
  }

  return res
}

export default mathOp
