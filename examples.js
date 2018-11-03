const state = {
  count: 0,
  text: '',
  list: []
}

const mutations = cxt => ({
  addToList (value) {
    cxt.list.push(value)

    return cxt
  },

  incCount () {
    cxt.count += 1

    return cxt
  },

  decCount () {
    cxt.count -= 1

    return cxt
  },

  setText (value) {
    if (value.length < 20) {
      cxt.text = value
    }

    return cxt
  }
})
const mutators = mutations(state)

mutators.incCount()

console.log(state)

mutators.decCount()

console.log(state)

mutators.setText('Hello There!')

console.log(state)

mutators.setText('This should not change our text because it will be too long.')

console.log(state)
