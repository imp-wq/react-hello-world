import React from 'react'

export default function Sidebar(props) {
  console.log(props)
  const list=['123','321','abc']
  const li=list.map(item=><li key={item}>{item}</li>)
  const initStyle={
    position:'fixed',
    width:'200px',
    backgroundColor:'pink',
  }
  const left={
    left:0
  }
  const right={
    right:0
  }
  const {position}=props
  const style=position==='left'?{...initStyle,...left}:{...initStyle,...right}

  return (
    <div>函数式组件-属性
      <ul style={style}>
        {li}
      </ul>
    </div>
  )
}
