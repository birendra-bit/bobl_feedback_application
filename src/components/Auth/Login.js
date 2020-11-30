import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { setUserSession, getToken } from "../../Utils/Common";
import Logo from "../../assets/images/login-bob-logo.png";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

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
                            successMessage: "Login successful. Redirecting to home page.",
                            failedMessage: null,
                        }));
                        setUserSession(resp.data.api_key, resp.data.api_secret, resp.data.login_id, resp.data.full_name);
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
                    failedMessage: "Login Unsuccessful. Try Again.",
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
            <Row className='justify-content-center login-jumbotron'>
                <Col className='my-auto' md={6} lg={3} sm={10} xs={10}>
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                        <img src={Logo} alt='BOB logo' className='login-logo' />
                    </div>
                    <form>
                        <div className='form-group text-left'>
                            <input type='text' className='form-control' id='username' placeholder='&#xF007; Username' value={state.username} onChange={handleChange} style={{ fontFamily: "Arial, FontAwesome" }} />
                        </div>

                        <div className='form-group text-left'>
                            <input type='password' className='form-control' id='password' placeholder='&#xF13E; &nbsp; Password' value={state.password} onChange={handleChange} style={{ fontFamily: "Arial, FontAwesome" }} />
                        </div>
                        <div className='form-check'></div>
                        <button type='submit' className='login-btn' onClick={handleSubmitClick}>
                            Login
                        </button>
                    </form>
                    <div className='alert alert-success mt-2 login-message' style={{ display: state.successMessage ? "block" : "none" }} role='alert'>
                        {state.successMessage}
                    </div>
                    <div className='alert alert-danger mt-2 login-message' style={{ display: state.failedMessage ? "block" : "none" }} role='alert'>
                        {state.failedMessage}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default withRouter(Login);
