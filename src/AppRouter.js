import React from "react"
import { Route, Switch } from "react-router-dom"
import WelcomePage from "./components/pages/WelcomePage"
import TeacherList from "./components/pages/TeacherList"
import NoticeList from "./components/pages/NoticeList"
import Login from "./components/pages/Login"
import Header from "./components/partials/Header"
import { NotificationContainer } from 'react-notifications';

import { history } from "./redux/setupStore"
import 'react-notifications/lib/notifications.css';

const AppRouter = () => (
  <div>
    <Header history={history} />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={WelcomePage} />
      <Route exact path="/teacherList" component={TeacherList} />
      <Route exact path="/noticeList" component={NoticeList} />
    </Switch>
    <NotificationContainer />
  </div>
)

export default AppRouter