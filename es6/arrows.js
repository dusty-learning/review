
const foo = function (data) {
  return 'new thing'
}

const foo = (data = []) => {
  if (data.length) {
    return 'array'
  }

  return 'new thing'
}

const foo = data => {
  return 'new thing'
}

const foo = data => 'new thing'

const tmp = [1, 2, 3]

tmp.map(({ val }) => {
  console.log(this)
  return val + 1
}) // => [2, 3, 4]

const self = this
tmp.map(function (val) {
  console.log(self)

  return val + 1
})

const foo = a => b => a + b

const add2 = foo(2)

add2(2)
