'use strict'

let p = new Promise((resolve, reject) => {
  resolve(3)
})

p.then((data) => {
  console.log(data)
})