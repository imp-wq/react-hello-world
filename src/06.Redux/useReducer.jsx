import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
  console.log(action)
  // 不要直接修改原状态
  const newState = { ...prevState }
  // 通过对type进行分支判断，对状态进行修改
  switch (action.type) {
    case 'decrement':
      newState.count--
      break
    case 'increment':
      newState.count++
      break
    default: 
  }
  // 返回新的状态
  return newState
}

const initialState = {
  count: 0
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'decrement'
          })
        }}
      >
        -
      </button>
      {state.count}
      <button onClick={()=>{
        dispatch({
          type:'increment'
        })
      }}>+</button>
    </div>
  )
}
