import React, { Component } from 'react'

class Son extends Component {
  render() {
    return (
      <div>
        Son
        {this.props.children}
      </div>
    )
  }
}

export default class Father extends Component {
  render() {
    return (
      <div>Father
        <Son>
          <h2>插槽中的内容</h2>
        </Son>
      </div>
    )
  }
}
