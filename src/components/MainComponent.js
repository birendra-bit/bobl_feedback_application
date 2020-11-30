import axios from "axios";
import { createBrowserHistory } from "history";
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute.js";
import { getToken, getUser, removeUserSession, setUserSession } from '../Utils/Common';
import Login from "./Auth/Login";
import Dashboard from "../containers/dashboard/dashboard";
import Logout from "./Auth/Logout";
import ViewFeedBack from "../containers/viewfeedback/viewfeedback"
import ViewFeeds from "../containers/viewfeeds/view"

const hist = createBrowserHistory();
function App() {
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios.get("/api/method/frappe.auth.get_loggedin_user_details").then(res=>{      
      if(res.status === 200){
        if(res.data.login_id === getUser()){
          setUserSession(res.data.api_key, res.data.api_secret, res.data.login_id, res.data.full_name);
        }
        else{
            removeUserSession();
        }
      }
      else{
        removeUserSession();
      }
    });
}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Router history={hist}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                {/* <PrivateRoute exact path="/feedback/:employee" component={ViewFeedBack}/>  */}
                <PrivateRoute exact path="/view/:employee" component={ViewFeeds}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Redirect to="/login" />
            </Switch>
        </Router>
        </BrowserRouter>
    </div>
  );
}
export default App;