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

var isListHidden = false

// 填写Email生产购买链接
function onBuy() {
  isListHidden = true
  currentItem = this.props.item
}

var list = document.querySelector('#list')

ReactDOM.render(
  <div>
    <ItemCardList items={datalist} onBuy={onBuy} hidden={isListHidden} />
    <EmailForm hidden={false} item={currentItem} />
  </div>,
  list
)
