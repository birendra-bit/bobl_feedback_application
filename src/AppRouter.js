import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import Login from "./containers/login/login";
import GiveFeedback from "./containers/give_feedback/give_feedback";

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        return (
            <Switch>
                <Route path='/' exact>
                    <Dashboard />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/give_feedback'>
                    <GiveFeedback />
                </Route>
            </Switch>
        );
    }
}

export default AppRouter;
