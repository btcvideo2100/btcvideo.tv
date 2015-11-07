var Firebase = require('firebase')
var nodeName = process.env.firebaseNodeName || 'btcvideo2100'
var db = new Firebase(`https://${nodeName}.firebaseio.com/`)

exports.init = (app) => {
  /**
   * src, title, desc, price, type
   */
  db.child('items').on('value', (snapshot) => {
    app.locals.items = snapshot.val() || {}
  })
}

exports.add = (opts) => {
  var items = db.child('items')
  items.push().set({
    src: opts.src,
    title: opts.title,
    desc: opts.desc,
    price: opts.price || 10,
    // 1视频，2图片
    type: opts.type || 1
  })
}
//
// exports.add({
//   src: 'https://thingd-media-ec6.thefancy.com/default/1010668639373755397_65b2f7ff1b5a.jpg',
//   title: 'test',
//   desc: 'Today we are very happy to be releasing an exciting new style of porn bundle that we call a step ',
//   price: 100,
//   type: 1
// })
