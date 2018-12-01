const myMap = new Map([['foo', 1], ['foo', 2]])
const obj = { a: 1, b: 2, c: 3 }
const objToMap = new Map(Object.entries(obj))

console.log(myMap)
console.log(myMap.has('b'))

myMap.set('baz', 3)

myMap.forEach((value, key) => {
  console.log(key, value)
})

for (let v of myMap) {
  console.log(v)
}
