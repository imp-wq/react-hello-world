import {createStore} from 'redux'
import {configureStore} from 'redux'
// 接收老状态和action，返回新的状态
const reducer=(prevState,action)=>{
  console.log(action)
  switch(action.type) {
    case 'test': return {message:action.text}
    default: return prevState
  }
}

// 通过createStore创建一个store，需要传入一个reducer作为参数
const store=createStore(reducer)
// const store=configureStore({reducer})

export default store