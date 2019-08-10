import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./redux/setupStore"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/lib/integration/react"
import App from "./App"
import serviceWorker from "./helpers/serviceWorker"

import "./assets/styles/main.scss"

let persistor = persistStore(store)
class RootContainer extends React.Component {

  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    )
  }
}

export default RootContainer

ReactDOM.render(<RootContainer />, document.getElementById("root"))
serviceWorker()