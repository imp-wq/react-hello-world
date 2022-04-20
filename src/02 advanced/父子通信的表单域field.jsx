import React, { Component } from 'react'

class Field extends Component {
  state={
    value:''
  }
  clear() {
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div>
        <label htmlFor="">{this.props.label}</label>
        <input type={this.props.type} onChange={(e)=>{this.setState({
          value:e.target.value
        })}}
 value={this.state.value}/>
      </div>
    )
  }
}

export default class App extends Component {
  state={
    username:'初始用户名',
    password:'123456'
  }
  getUsername=(value)=>{
    this.setState({
      username:value
    })
  }
  getPassword=(value)=>{
    this.setState({
      password:value
    })
  }
 
  render() {
    const username=React.createRef()
    const password=React.createRef()
    return (
      <div>
        <h2>登录界面</h2>
        <Field ref={username} label="用户名" type="text" onChange={this.getUsername} value={this.state.username}/>
        <Field ref={password} label="密码" type="password" onChange={this.getPassword} value={this.state.password}/>
        <button onClick={()=>{
          console.log(username.current.state.value)
          console.log(password.current.state.value)
        }}>登录</button>
        <button onClick={()=>{
          username.current.clear()
          password.current.clear()
        }}>清空</button>
      </div>
    )
  }
}
