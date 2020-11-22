import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../../assets/images/BOBLogo.png";
import "./login.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import axios from "axios"
export default class Login extends Component {
        handleSubmit = (e) => {
                e.preventDefault();
                const data = {
                        method: 'POST',
                        headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({
                                usr: this.usr,
                                pwd: this.pwd
                        })
                }
                axios.post("http://cdcl.erp.bt/api/method/login", data)
                        .then(res => {
                                console.log(res)
                        })
                        .catch(err => {
                                console.log(err)
                        });
                console.log(data)
        };
        render() {
                return (
                        <Container>
                                <Row className='login-jumbotron'>
                                        <Col md={12} className='logo-img'>
                                                <img src={Logo} alt='BOB logo' className='logo' />
                                        </Col>
                                        <Col md={12}>
                                                <form onSubmit={this.handleSubmit}>
                                                        <div className='form-group'>
                                                                <input type='text' className='form-control' placeholder='&#xF007;  Username' style={{ fontFamily: "Arial, FontAwesome" }} onChange={e => this.usr = e.target.value} />
                                                        </div>
                                                        <div className='form-group'>
                                                                <input type='password' className='form-control' placeholder='&#xF13E;  Password' style={{ fontFamily: "Arial, FontAwesome" }} onChange={e => this.pwd = e.target.value} />
                                                        </div>

                                                        <div className='form-group'>
                                                                <div className='custom-control custom-checkbox' style={{ color: "#6c757d" }}>
                                                                        <input type='checkbox' className='custom-control-input' id='customCheck1' />
                                                                        <label className='custom-control-label' htmlFor='customCheck1'>
                                                                                Remember me
                  </label>
                                                                </div>
                                                        </div>
                                                        <div style={{ textAlign: "center" }}>
                                                                {" "}
                                                                <button type='submit' className='btn login-btn'>
                                                                        Login
                </button>
                                                        </div>
                                                </form>
                                        </Col>
                                </Row>
                        </Container>
                );
        }
}
