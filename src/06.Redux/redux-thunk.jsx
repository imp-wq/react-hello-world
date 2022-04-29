import React, { useState, useEffect, useRef } from 'react'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

const reducer = (prevState = { message: 'abcd' }, action) => {
  console.log(action)
  switch (action.type) {
    case 'change':
      return { message: action.payload }
    default:
      return prevState
  }
}

const store = createStore(reducer, applyMiddleware(reduxThunk))

const actionCreator = (input) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'change',
        payload: input
      })
    }, 2000)
  }
}

export default function App() {
  const input = useRef(null)
  const [state, setState] = useState('qwert')
  const style = {
    border: '1px solid yellow',
    marginTop: '20px'
  }
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log('subscribe')
      setState(store.getState().message)
    })
    return ()=> {
      unsubscribe()
    }
  }, [])

  return (
    <div style={style}>
      redux-thunk
      <div>{state}</div>
      <button
        onClick={() => {
          store.dispatch(actionCreator(input.current.value))
        }}
      >
        submit
      </button>
      <input ref={input} type='text' onChange={(e) => {}} />
    </div>
  )
}
