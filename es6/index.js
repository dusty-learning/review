
const data = [1, 2, 3, 4, 5]

function thing ([a, ...rest]) {
  console.log(a + 1)

  if (rest.length) {
    return thing(rest)
  }
}

thing(data)

const foo = {
  bar: 'things'
}
const bar = 'something else'
const { bar: baz, cool = '' } = foo

console.log(bar)
console.log(baz)
console.log('cool:', cool)
