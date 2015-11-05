import React from 'react'
import ReactDOM from 'react-dom'
import ItemCardList from './components/item-card-list.js'
import EmailForm from './components/email-form.js'

var datalist = []
for (var key in App.items) {
  var value = App.items[key]
  value.key = key
  datalist.push(value)
}

// 填写Email生产购买链接
function onBuy() {
  var item = this.props.item

}

var list = document.querySelector('#list')

ReactDOM.render(
  <EmailForm hidden={true} />
, list)
