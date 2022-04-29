import React, { useEffect, useState } from 'react'
import store from '@/06.Redux/redux/store'
import ReducerComponent from './useReducer'
import CombineReducerComponent from './reducer合并'
import MyReduxThunkComponent from './redux-thunk原理'
import ReduxThunkComponent from './redux-thunk'

const App2 = () => {
  return (
    <div>
      <h2>App2</h2>
      <button
        onClick={() => {
          store.dispatch({
            type: 'test',
            text: 'hello'
          })
        }}
      >
        change message
      </button>
    </div>
  )
}

export default function App() {
  const style = {
    border: '1px solid red'
  }
  const [state, setState] = useState({ message: 'abcde' })
  const [isShow, setIsShow] = useState(true)
  useEffect(() => {
    store.subscribe(() => {
      console.log('app订阅', store.getState())
      setState({
        message: store.getState().message
      })
    })
  }, [])
  return (
    <>
      <div style={style}>
        App-{state.message}
        <App2 />
        <ReducerComponent />
      </div>
      <CombineReducerComponent />
      <MyReduxThunkComponent />
      <button onClick={()=>{
        setIsShow(!isShow)
      }}>重复订阅</button>
      {isShow ? <ReduxThunkComponent /> : null}
    </>
  )
}
