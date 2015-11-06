import React from 'react'
import ItemCard from './item-card.js!jsx'

var ItemCardList = React.createClass({
  render: function() {
    var list = this.props.datalist.map(function(item) {
      return <ItemCard item={item} key={item.key} onBuy={this.props.onBuy} />
    })
    return <div>{list}</div>
  }
})

export default ItemCardList
