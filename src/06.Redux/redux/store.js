import {createStore} from 'redux'
// import {myCreateStore as createStore} from './redux原理'

// 接收老状态和action，返回新的状态
const reducer=(prevState={
  message:'qqwerqre'
},action)=>{
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