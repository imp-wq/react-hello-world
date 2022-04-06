import React, { Component } from 'react'
import './选项卡demo.css'
import Film from './Film'
import Cinema from './Cinema'
import Mine from './Mine'

export default class App extends Component {
  state={
    list:[{
      id:1,
      text:'影院'
    },{
      id:2,
      text:'我的'
    },{
      id:3,
      text:'电影'
    },],
    current:1 // 当前点击的
  }
  clickHandler=(id)=>{
    console.log(id)
    this.setState({
      current:id
    })
    console.log('current:',this.state.current)
  }

  show() {
    switch(this.state.current) {
      case 1: 
        return <Cinema/>
      case 2: 
        return <Mine/>
      case 3: 
        return <Film/>
      default: return null
    }
  }
  render() {
    const list=this.state.list.map(item=>(<li className={this.state.current===item.id?'active':''} onClick={()=>{
      this.clickHandler(item.id)
    }} key={item.id}>{item.text}</li>))
    return (
      <div>
        选项卡demo
        {this.show()}
        <ul>{list}</ul>
      </div>
      
    )
  }
}
