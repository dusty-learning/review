const mySet = new Set([1, 2, 3, 4, 5])
const foo = { a: 1, b: 2 }
const complexSet = new Set([foo, { c: 3, d: 4 }])

foo.e = 6

console.log(complexSet)

// console.log(complexSet.keys())
// console.log(complexSet.values())
// console.log(complexSet.entries())

mySet.add(6)

// console.log(mySet.has(6))


