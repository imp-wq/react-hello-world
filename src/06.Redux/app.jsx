import React, { useEffect, useState } from 'react'
import store from '@/06.Redux/redux/store'
import ReducerComponent from './useReducer'

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
  const [state, setState] = useState({ message: 'abcde' })
  useEffect(() => {
    store.subscribe(() => {
      console.log('app订阅', store.getState())
      setState({
        message: store.getState().message
      })
    })
  }, [])
  return (
    <div>
      App-{state.message}
      <App2 />
      <ReducerComponent />
    </div>
  )
}
