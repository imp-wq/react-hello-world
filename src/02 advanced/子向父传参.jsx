import React, { Component } from 'react'

class Navbar extends Component {
  toggle() {
    this.props.eventHandler()
  }

  render() {
    return (
      <div style={{ backgroundColor: 'pink' }}>
        <button
          onClick={() => {
            this.toggle()
          }}
        >
          click
        </button>
      </div>
    )
  }
}

class Sidebar extends Component {
  state = {
    list: ['123', '312', 'aaaa']
  }

  render() {
    const li = this.state.list.map((item) => <li key={item}>{item}</li>)
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        <ul>{li}</ul>
      </div>
    )
  }
}

export default class App extends Component {
  state={
    isShow: false
  }
  eventHandler() {
    console.log('接收事件')
  }
  render() {
    return (
      <div>
        子向父传参
        <Navbar eventHandler={this.eventHandler}/>
        <Sidebar />
      </div>
    )
  }
}
