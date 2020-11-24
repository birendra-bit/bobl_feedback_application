// @material-ui/core components
import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { removeUserSession } from '../../Utils/Common.js';

export default function Logout(props) {
    removeUserSession();
    return (
        <>
            <Switch>
                <Redirect from="/logout" to="/login" />
            </Switch>
        </>
    );
}