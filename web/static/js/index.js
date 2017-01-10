/* global document */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Phoenix' dependencies
import '../../../deps/phoenix/priv/static/phoenix'
import '../../../deps/phoenix_html/priv/static/phoenix_html'

import App from './app'
import Dashboard from './dashboard'
import Restaurants from './restaurants/index'

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={Dashboard} />
    <Route path="restaurants" component={Restaurants} />
  </Route>
)
// render(<Root />, document.getElementById('root'))

render((<Router history={hashHistory}>{routes}</Router>), document.getElementById('root'))
