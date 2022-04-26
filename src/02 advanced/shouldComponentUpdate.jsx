import React, { Component } from 'react'
import './shouldComponentUpdate.css'

class Box extends Component {
  shouldComponentUpdate(nextProps,nextState) {
    if(JSON.stringify(this.props)!==JSON.stringify(nextProps)) return true
    else return false
  }
  render() {
    console.log(this.props.current)
    console.log(this.props.id)
    console.log(this.props.current === this.props.id)
    const borderStyle=this.props.current === this.props.id?'3px solid red':''
    return <div className='box' style={{ border:borderStyle }}></div>
  }
}

export default class App extends Component {
  state = {
    list: [0, 1, 2, 3, 4, 5, 6],
    current: 0
  }
  render() {
    return (
      <div className='container'>
        <input
          type='number'
          onChange={(e) => {
            this.setState({
              current: Number(e.target.value)
            })
          }
        }
        value={this.state.current}
        />
        <div className='float'>
          {this.state.list.map((item, index) => (
            <Box key={this.state.list[index]} id={this.state.list[index]} current={this.state.current} />
          ))}
        </div>
      </div>
    )
  }
}
