var React = require('react')
var ItemCard = require('./item-card.jsx')

module.exports = React.createClass({
  render: function() {
    var list = this.props.datalist.map(function(item) {
      return <ItemCard item={item} key={item.key} onBuy={this.props.onBuy} />
    })
    return <div>{list}</div>
  }
})
