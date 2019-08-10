import React from "react"

import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./AppRouter"
import { history } from "./redux/setupStore"

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Router>
    )
  }
}