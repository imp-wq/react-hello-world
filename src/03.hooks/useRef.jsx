import React, { useRef, useState } from 'react'

export default function App() {
  const div = useRef()
  let count = 0
  const [state,setState]=useState(0)
  const count_ref = useRef(0)
  return (
    <>
      <div ref={div}>App</div>
      
      <button
        onClick={() => {
          // console.log(div.current)
          count++
          count_ref.current++
          setState(state+1)
          console.log(count_ref.current)
          console.log(count)
        }}
      >
        click
      </button>
      <div>count-{count}</div>
      <div> count_ref-{count_ref.current}</div>
    </>
  )
}
