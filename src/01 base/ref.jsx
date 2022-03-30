import React, { Component } from 'react'

export default class App extends Component {
  myref = React.createRef() // 在类中创建一个成员变量
  render() {
    return (
      <div>
        <input type='text' ref={this.myref} />
        <button
          onClick={() => {
            console.log('click')
            console.log(this.myref.current.value)
          }}
        >
          添加
        </button>
      </div>
    )
  }
}
