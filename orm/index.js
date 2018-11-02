const fs = require('fs')
const db = require('./db.json')

const create = function (data) {
  const payload = db.concat(data)

  fs.writeFile('./db.json', JSON.stringify(payload), function (err) {
    if (err) {
      throw err
    }

    console.log('created')
  })
}

const update = function (id, data) {
  const i = db.findIndex(function (x) {
    return x.id === id
  })
  const payload = Object.assign({}, db[i], data)
  const tmp = [...db.slice(0, i), payload, ...db.slice(i, Infinity)]

  fs.writeFile('./db.json', JSON.stringify(tmp), function (err) {
    if (err) {
      throw err
    }

    console.log('Updated')
  })
}

