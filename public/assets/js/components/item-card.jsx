var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      item: {}
    }
  },
  render: function() {
    return (
      <div className="list-item">
        <div className="image-item">
          <img src={this.props.item.src}/>
        </div>

        <div className="info-item">
          <a href="javascript:;" className="info-title">
            <strong>{this.props.item.title}</strong>
          </a>
          <p className="info-desc">
            {this.props.item.desc}
          </p>
          <em className="info-price" title="1mbtc = 1/1000 btc">
            {this.props.item.price}
            mbtc
          </em>
        </div>

        <div className="action-item">
          <a href="javscript:;" title="preview this video now" onClick={this.props.onBuy.bind(this)}>Preview</a>
          <a href="javascript:;">Report</a>
        </div>
      </div>
    )
  }
})
