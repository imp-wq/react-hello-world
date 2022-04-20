import React, { Component } from 'react'
const GlobalContext = React.createContext()

class Son extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          console.log(value)
          return (
            <div>
              <input
                type='text'
                onChange={(e) => {
                  value.changeA(e.target.value)
                }}
              />
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default class App extends Component {
  state = {
    a: 'abc',
    b: '123'
  }
  render() {
    return (
      <GlobalContext.Provider
        value={{
          changeA: (value) => {
            this.setState({
              a: value
            })
          },
          ...this.state
        }}
      >
        <div>
          Father:
          <div>a:{this.state.a}</div>
          <div>b:{this.state.b}</div>
          <Son />
        </div>
      </GlobalContext.Provider>
    )
  }
}
