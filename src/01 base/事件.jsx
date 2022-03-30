import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <button onClick={this.btnClick}>事件</button>
          {/* <button onClick={this.btnClick.bind(this)}>事件</button> */}
          <button onClick={()=>{this.btnClick()}}>箭头函数</button>
      </div>
    )
  }
  btnClick() {
      console.log(this)
      console.log('click')
  }
}
