function myAsyncFn (a) {
  return new Promise((resolve, reject) => {
    if (a < 10) {
      return resolve(a + 1)
    }

    return reject(new Error('a is > 10!'))
  })
}

myAsyncFn(11)
  .then(value => {
    console.log(value)
    return value + 2
  })
  .then(v => {
    console.log(v)
  })
  .catch(console.error)
  .finally(() => console.log('Finally!'))

console.log('Did I fire first?')
