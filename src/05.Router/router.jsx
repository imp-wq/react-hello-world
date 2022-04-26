import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

const Films = () => {
  return (
    <div>
      <h2>Film组件</h2>
      <Route path='/films/nowplaying' component={NowPlaying} />
      <Route path='/films/comingsoon' component={ComingSoon} />
      <Redirect from='/films' to='/films/nowplaying' />
    </div>
  )
}

const NowPlaying = () => {
  return (
    <div>
      <h3>正在热映</h3>
    </div>
  )
}

const Cinemas = () => {
  return (
    <div>
      <h2>Cinemas组件</h2>
    </div>
  )
}

const ComingSoon = () => {
  return (
    <div>
      <h3>即将到来</h3>
    </div>
  )
}

const Center = () => {
  return (
    <div>
      <h2>Center组件</h2>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
    </div>
  )
}

export default function App() {
  return (
    <>
      <HashRouter>
        <div>
          <ul>
            <li>
              <NavLink to='/films'>电影</NavLink>
            </li>
            <li>
              <NavLink to='/cinemas'>影院</NavLink>
            </li>
            <li>
              <NavLink to='/center'>个人中心</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/films' component={Films} />
          <Route path='/cinemas' component={Cinemas} />
          <Route path='/center' component={Center} />
          {/* 加入exact进行精确匹配 */}
          <Redirect exact from='/' to='/films' />
          {/* 所有没被匹配到的，会展示404 */}
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  )
}
