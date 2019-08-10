import React from "react"
import { Route, Switch } from "react-router-dom"
import WelcomePage from "./components/pages/WelcomePage"
import Header from "./components/partials/Header"
import {NotificationContainer} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

const AppRouter = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
    </Switch>
    <NotificationContainer/>
  </div>
)

export default AppRouter