import React, { useState, useEffect } from 'react'
import { createStore } from 'redux'


const reducer = (prevState = { message: 'abcdd' }, action) => {
  switch (action.type) {
    case 'change':
      return { message: action.payload }
    default:
      return prevState
  }
}
const store = createStore(reducer)
const actionCreator = (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'change',
      payload: 'hahahahaha'
    })
  }, 3000)
}

export default function App() {
  const [state, setState] = useState('state')
  const style={
    border:'1px solid green',
    marginTop:'20px'
  }
  useEffect(()=>{
    store.subscribe(()=>{
      setState(store.getState().message)
    })
  },[])
  return (
    <div style={style}>
      <h3>redux-thunk</h3>
      <div>{state}</div>
      <button
        onClick={(e) => {
          actionCreator(store.dispatch)
        }}
      >
        change
      </button>
    </div>
  )
}
