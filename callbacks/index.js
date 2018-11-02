
var makeAjax = function (url, cb) {
  // Do thing with url
  console.log(url)

  cb(new Error('Something borked!'), { data: 'Woo!' })
}

makeAjax('/api/some/place/cool', function (err, response) {
  if (err) {
    throw err
  }

  console.log(response)
})


