import React, { Component } from 'react'

export default class 受控组件 extends Component {
  state={
    value:123
  }
  changeHandler=(e)=> {
    this.setState({
      value:e.target.value
    })
  }
  render() {
    return (
      <div>受控组件
        <input type="text"  value={this.state.value} onChange={(e)=>{this.changeHandler(e)}}/>
      </div>
    )
  }
}
