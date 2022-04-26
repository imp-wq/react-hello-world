import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [name, setName] = useState('abc')
  const [age, setAge] = useState('11')
  const [obj, setObj] = useState({})

  useEffect(() => {
    // const fetchData = async () => {
    //   const { data: res } = await axios.get('/file/test.json')
    //   setObj(res)
    //   console.log(obj)
    // }
    // fetchData()
    axios.get('/file/test.json').then(({ data: res }) => {
      setObj(res)
      console.log(res,obj)
    })
  },[])

  return (
    <div>
      <button
        onClick={() => {
          setName('dog')
          setAge(22)
        }}
      >
        change
      </button>
      app-{name}-{age}-{obj.message}
    </div>
  )
}


