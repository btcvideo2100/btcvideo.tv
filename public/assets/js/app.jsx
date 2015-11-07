var React = require('react')
var ReactDOM = require('react-dom')
var ItemCardList = require('./components/item-card-list.jsx')
var EmailForm = require('./components/email-form.jsx')

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
  <EmailForm hidden={false} />,
  list
)
