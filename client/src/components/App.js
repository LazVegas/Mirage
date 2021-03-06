import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import "../redux/ducks/chat"

import CheckLogin from "./CheckLogin"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={CheckLogin} />         
        </Switch>
      </Router>
    </div>
  )
}

export default App
