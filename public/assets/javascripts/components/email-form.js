import React from 'react'

var widget = React.createClass({
  getInitialState: function() {
    return {
      hidden: false,
      sent: false
    }
  },
  getPaymentLink: function() {
    // TODO 这里如何根据数据输出不同的HTML
    this.setState({
      sent: true
    })

    setTimeout(function(that) {
      that.setState({
        hidden: true,
        sent: false
      })
    }, 3000, this)
  },
  render: function() {
    return (
      <div className="email-form" hidden={this.state.hidden}>
        <form className="pure-form">
          <fieldset>
            <legend>Pay with Bitcoin</legend>
            <input className="email-form-input" type="email" placeholder="Enter your email to get payment link" required />
            <button type="button" className="pure-button pure-button-primary" onClick={this.getPaymentLink}>
              Send payment link
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
})

export default widget
