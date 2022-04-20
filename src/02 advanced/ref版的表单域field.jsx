import React, { Component } from 'react'

class Field extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">{this.props.label}</label>
        <input type={this.props.type} onChange={(e)=>{this.props.onChange(e.target.value)}}
 value={this.props.value}/>
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
        <Field label="用户名" type="text" onChange={this.getUsername} value={this.state.username}/>
        <Field label="密码" type="password" onChange={this.getPassword} value={this.state.password}/>
        <button onClick={()=>{
          this.setState({
            username:username.current.value,
            password:password.current.value
          })
          console.log(this.state)
        }}>登录</button>
        <button>清空</button>
      </div>
    )
  }
}
