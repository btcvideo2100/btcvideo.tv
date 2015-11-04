import React from 'react'
import ReactDOM from 'react-dom'
import ItemCardList from './components/item-card-list.js'

var datalist = []
for (var key in App.items) {
  var value = App.items[key]
  value.key = key
  datalist.push(value)
}

ReactDOM.render(<ItemCardList datalist={datalist} />, document.querySelector('#list'))
