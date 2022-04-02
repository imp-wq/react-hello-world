import React, { Component } from 'react'

export default class App extends Component {
  list = ['aaaa', 'bbbbb', 'cccccc']
  render() {
    const domList=this.list.map(item=><li key={item}>{item}</li>)
    return(
      <div>
        App
        <ul>
          {domList}
        </ul>
      </div>
    )
    
  }
}

