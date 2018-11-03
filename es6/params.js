
const add = (a, b = 1) => a + b

add(1, 2) // => 3

const getLen = (a = '') => {
  if (a.length) {
    return 'Has length!'
  }

  return 'No Length'
}

const baz = (a, ...args) => {
  const sum = args.reduce((total, n) => total + n, 0)

  return sum * a
}

console.log(baz(3, 2, 3, 4, 5, 6, 7, 8, 9, 10))
