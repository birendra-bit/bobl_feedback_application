import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './containers/dashboard/dashboard'
import Login from "./components/Login/Login";


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
            </Switch>
        )
    }
}


export default AppRouter