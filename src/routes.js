import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import NotFound from './components/global/not-found'

console.log("not-found", NotFound)

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
