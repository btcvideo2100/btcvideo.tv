import React from 'react'
import ItemCard from './item-card.js'

var ItemCardList = React.createClass({
  render: function() {
    var list = this.props.datalist.map(function(item) {
      return <ItemCard item={item} key={item.key} />
    })
    return <div>{list}</div>
  }
})

export default ItemCardList
