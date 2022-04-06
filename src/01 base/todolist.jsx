import React, { Component } from 'react'

export default class App extends Component {
  myref = React.createRef() // 在类中创建一个成员变量

  state = {
    list: ['aaa', 'bbbb', 'ccccccc']
  }

  add = () => {
    const newList=[...this.state.list]
    newList.push(this.myref.current.value)
    this.setState({ list: newList })
  }

  handleClick=(index)=>{
    console.log('点击删除'+index)

    // 数组的深拷贝
    const newList=this.state.list.slice()
    newList.splice(index,1)
    this.setState({
      list:newList
    })
  }

  render() {
    const todolist = this.state.list.map((item,index) => <li key={item} >
      {item}
      <button onClick={this.handleClick.bind(this,index)}>删除-bind</button>
      <button onClick={()=>{this.handleClick(index)}}>删除-箭头函数</button>
      </li>)

    return (
      <div>
        <input type='text' ref={this.myref} />
        <button onClick={this.add}>添加</button>
        <ul>{todolist}</ul>
        {this.state.list.length<=0?<div>暂无待办事项</div>:null}
        {this.state.list.length<=0 && <div>暂无待办事项-&&</div>}

        <div dangerouslySetInnerHTML={{__html:'<h2>abc<h2/>'}}></div>
      </div>
    )
  }
}
