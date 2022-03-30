import React, { Component } from 'react'

export default class App extends Component {


    constructor() {
        super()
        this.state={
            flag:true
        }
    }
//   state = {
//     flag:true
//   }

  render() {
    return (
      <div>
        state
        <button
          onClick={() => {
            this.setState({
              flag: !this.state.flag
            })
          }}
        >
          {this.state.flag?'收藏':'取消收藏'}
        </button>
      </div>
    )
  }
}
