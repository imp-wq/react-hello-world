import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    title:PropTypes.string,
  }

  static defaultProps={
    title:'标题'
  }
  render() {
    console.log(this.props)
    const {title}=this.props
    return (
      <div>NavBar-{title}</div>
    )
  }
}
// Navbar.propTypes = {
//   title:PropTypes.string,
// }
