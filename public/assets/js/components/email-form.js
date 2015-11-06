import React from 'react'

var widget = React.createClass({
  getInitialState: function() {
    return {
      hidden: true,
      sent: false
    }
  },
  getPaymentLink: function() {
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
    var fragment = this.state.sent ? <div>ok!</div> : (
      <form className="pure-form">
        <fieldset>
          <legend>Pay with Bitcoin</legend>
          <input className="email-form-input" type="email" placeholder="Enter your email to get payment link" required />
          <button type="button" className="pure-button pure-button-primary" onClick={this.getPaymentLink}>
            Send payment link
          </button>
        </fieldset>
      </form>
    )

    return (
      <div className="email-form" hidden={false}>
        {fragment}
      </div>
    )
  }
})

export default widget
