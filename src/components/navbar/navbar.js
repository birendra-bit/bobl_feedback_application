import React, { Component } from "react";
import { Navbar, Button, Image, Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Logo from "../../assets/images/navbar-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

class Navigationbar extends Component {
  constructor(props = []) {
    super(props);
    this.state = {
      show: false,
      userDetail: {},
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };
  showUser = async () => {
    let url = `/api/method/erpnext.feedback_api.user_detail?user=`;
    try {
      let resp = await axios.get(url + sessionStorage.getItem("user"));

      this.setState({
        userDetail: resp.data.message[0],
      });
    } catch (err) {
        console.error(err)
    }
  };
  componentDidMount() {
    this.showUser();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" className="nav">
          &nbsp; &nbsp;
          <Navbar.Brand className="mr-auto">
            <Link to="/dashboard">
              <Image className="logo" src={Logo} />
            </Link>
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-middle"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item mt-2" style={{ marginLeft: "20px" }}>
                <Link to="/dashboard" className="nav-link">
                  <span className="font-weight-bold">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item mt-2" style={{ paddingTop: "10px" }}>
                <span
                  className="text-md font-weight-bold username"
                  onClick={this.showModal}
                >
                  {this.state.userDetail.employee_name}
                </span>
              </li>
              <li className="nav-item username">
                {/* need to get the image from the session rather than from the state. */}
                <img
                  alt=""
                  className="profile"
                  src={ this.state.userDetail.image ? "http://192.168.70.38" + this.state.userDetail.image : ""}
                  onClick={this.showModal}
                />
              </li>
            </ul>
          </div>
        </Navbar>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          animation={false}
        >
          <Modal.Body style={{ padding: "20px" }}>
            <Row>
              <Col md={5} lg={5} sm={5} xs={5}>
                <img
                  src={"http://192.168.70.38" + this.state.userDetail.image}
                  alt="user"
                  className="user_image"
                />
              </Col>
              <Col md={7} lg={7} sm={7} xs={7} style={{ marginTop: "20px" }}>
                <p>
                  <span className="info"> Name: </span>
                  {this.state.userDetail.employee_name}
                </p>
                <p>
                  <span className="info"> Designation: </span>
                  {this.state.userDetail.designation}
                </p>
                <p>
                  <span className="info"> Department: </span>{" "}
                  {this.state.userDetail.department}
                </p>
                <p>
                  <span className="info"> Branch: </span>{" "}
                  {this.state.userDetail.branch}
                </p>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/logout">
              <Button
                variant="secondary"
                style={{ padding: "1px 7px", color: "white" }}
              >
                logout
              </Button>
            </Link>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
              style={{ padding: "1px 7px", color: "white" }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Navigationbar;
