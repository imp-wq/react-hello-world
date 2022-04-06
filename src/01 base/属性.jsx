import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './函数式组件-属性'
import Uncontrolled from './非受控组件'
import Controlled from './受控组件'


export default class 属性 extends Component {
  render() {
    return (
      <div>
        <Navbar title='首页' num={123} />
        <Navbar title='购物车' />
        <Navbar title='我的' />
        <Navbar />
        <Sidebar position="right"/>
        <Uncontrolled />
        <Controlled />
      </div>
    )
  }
}
