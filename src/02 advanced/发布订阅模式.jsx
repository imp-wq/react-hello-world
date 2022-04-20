import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return <div>App</div>
  }
}

const bus = {
  list: [],
  subscribe(callback) {
    this.list.push(callback)
  },
  publish(value) {
    this.list.forEach((item) => item && item(value))
  }
}

bus.subscribe(value => {
  console.log('111111',value)
})

bus.subscribe(value => {
  console.log('2222222',value)
})

setTimeout(()=>{
  bus.publish('第一次发布')
},0)

setTimeout(()=>{
  bus.publish('第二次发布')
},1000)

setTimeout(()=>{
  bus.publish('第三次发布')
},2000)
