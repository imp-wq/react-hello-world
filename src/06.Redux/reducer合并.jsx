import React, { useState, useEffect } from 'react'
import { createStore, combineReducers } from 'redux'

const reducer1 = (prevState = { city: '北京' }, action = {}) => {
  switch (action.type) {
    case 'change':
      return { city: action.payload }
    default:
      return prevState
  }
}

const reducer2 = (prevState = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { count: prevState.count + 1 }
    case 'decrement':
      return { count: prevState.count - 1 }
    default:
      return prevState
  }
}

const reducer = combineReducers({ reducer1, reducer2 })
const store = createStore(reducer)

export default function App() {
  const [count, setCount] = useState(0)
  const [city,setCity]=useState('北京')
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().reducer2.count)
      setCity(store.getState().reducer1.city)
    })
  }, [])

  const style = {
    border: '1px solid blue',
    marginTop: '20px'
  }

  return (
    <div style={style}>
      <div>
        App-{city}
        <input type="text" onChange={(e)=>{
          store.dispatch({type:'change',payload:e.target.value})
        }}/>
        </div>

      <div>
        <button
          onClick={() => {
            store.dispatch({ type: 'increment' })
          }}
        >
          +1
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            store.dispatch({ type: 'decrement' })
          }}
        >
          -1
        </button>
      </div>
    </div>
  )
}
