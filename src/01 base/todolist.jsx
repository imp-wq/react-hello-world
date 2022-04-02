import React, { Component } from 'react'

export default class App extends Component {
  myref = React.createRef() // 在类中创建一个成员变量

  state = {
    list: ['aaa', 'bbbb', 'ccccccc']
  }

  add = () => {
    const newList=[...this.state.list]
    newList.push(this.myref.current.value)
    this.setState({ list: newList })
  }
  render() {
    const todolist = this.state.list.map((item) => <li key={item}>{item}</li>)

    return (
      <div>
        <input type='text' ref={this.myref} />
        <button onClick={this.add}>添加</button>
        <ul>{todolist}</ul>
      </div>
    )
  }
}
