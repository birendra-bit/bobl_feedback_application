import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { setUserSession, getToken } from "../../Utils/Common";

function Login(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null,
        failedMessage: null,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const data = {
            usr: state.username,
            pwd: state.password,
        };
        axios
            .post("/api/method/login", data)
            .then(function (response) {
                var url = `/api/method/frappe.auth.get_loggedin_user_details`;
                axios
                    .get(url)
                    .then((resp) => {
                        console.log(resp);
                        setState((prevState) => ({
                            ...prevState,
                            successMessage: "Login successful. Redirecting to home page..",
                            failedMessage: null,
                        }));
                        setUserSession(resp.data.api_key, resp.data.api_secret, resp.data.login_id);
                        redirectToHome();
                        props.showError(null);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
                setState((prevState) => ({
                    ...prevState,
                    successMessage: null,
                    failedMessage: "Login Unsuccessful. Try Again..",
                }));
            });
    };
    const redirectToHome = () => {
        props.history.push("/dashboard");
    };

    const token = getToken();
    if (token) {
        redirectToHome();
    }

    return (
        <Container fluid={true} className='loginBackground'>
            <Row className='justify-content-md-center h-100'>
                <Col md={3} lg={3} sm={12} xs={12} className='my-auto'>
                    <div className='card col-12 col-md-9'>
                        <form>
                            <div className='form-group text-left'>
                                <label htmlFor='exampleInputEmail1'>Username</label>
                                <input type='text' className='form-control' id='username' placeholder='Username' value={state.username} onChange={handleChange} />
                            </div>
                            <div className='form-group text-left'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <input type='password' className='form-control' id='password' placeholder='Password' value={state.password} onChange={handleChange} />
                            </div>
                            <div className='form-check'></div>
                            <button type='submit' className='btn btn-primary' onClick={handleSubmitClick}>
                                Login
                            </button>
                        </form>
                        <div className='alert alert-success mt-2' style={{ display: state.successMessage ? "block" : "none" }} role='alert'>
                            {state.successMessage}
                        </div>
                        <div className='alert alert-danger mt-2' style={{ display: state.failedMessage ? "block" : "none" }} role='alert'>
                            {state.failedMessage}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default withRouter(Login);
