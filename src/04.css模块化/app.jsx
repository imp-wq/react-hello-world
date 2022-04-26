import React from 'react'
import style from './style.module.css'

export default function app() {
  console.log(style)
  return (
    <div className={style.box}>app</div>
  )
}
