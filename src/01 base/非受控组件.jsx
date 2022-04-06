import React, { Component } from 'react'

export default class 非受控组件 extends Component {
  render() {
    return (
      <div>非受控组件
        <input type="text" defaultValue={123}/>
      </div>
    )
  }
}
