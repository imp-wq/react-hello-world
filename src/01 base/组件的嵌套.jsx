import React, { Component } from 'react'


const GrandFather=()=> <div><Father/>爷爷组件</div>

const Father=()=><div><Son/>爸爸组件</div>

const Son=()=><div>儿子组件</div>   

export default class App extends Component {
  render() {
    return (
      <div>
          <GrandFather/>
          组件的嵌套
    </div>
    )
  }
}
