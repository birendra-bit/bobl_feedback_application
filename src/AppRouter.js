import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './containers/dashboard/dashboard'
<<<<<<< HEAD
import Login from './containers/login/login'
import FeedBack from './containers/feedback/feedback'

=======
import Login from "./components/Login/Login";
>>>>>>> 867b62143d7315da222e4b385f07713e519528ed


class AppRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/feedback">
                    <FeedBack/>
                </Route>
            </Switch>
        )
    }
}


export default AppRouter