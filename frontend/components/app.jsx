import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util'
import { Route, Switch, Redirect } from 'react-router-dom'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Home from "./homepage/home"
import Splash from "./splash"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // the routes need to imported for lines 18. 19 
  // the route for protectedRoute need to directed to a specific page. 

  render() {
    return (
      <div>
        {/* <Header />
        <Cart /> */}
        <Switch>
          <AuthRoute path="/login" component={LogInFormContainer}/>
          <AuthRoute path="/signup" component={SignUpFormContainer}/>
          <ProtectedRoute path="/homepage" component={Home}/> 
          <Route path='/' component={Splash}/>
        </Switch>
      </div>
    )
  }
}

export default App;