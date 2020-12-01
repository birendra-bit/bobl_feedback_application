import React, { Component } from "react";
import { Table, Col } from "react-bootstrap";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";
// import Pagination from '../pagination/pagination'

const feedback_given_by = (props) => {
  if ( !props.info.length)
    return <strong>No Data To Display</strong>
  let table_head = (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Name</th>
        {/* <th scope="col">Designation</th> */}
        <th scope="col">Branch</th>
        <th scope="col">Department</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
  );
  let table_body = props.info.map((info, index) => {
    return (
      <tr key={index} style={{ fontSize: "13px" }}>
        <td scope="row">{index + 1}</td>
        <td scope="row">
          {" "}
          <img
            src={
              info.image
                ? "http://192.168.70.38" + info.image
                : info.gender === "Male"
                ? imgUrlMale
                : imgUrlFemale
            }
            style={{ height: "30px", width: "30px", borderRadius: "15px" }}
          />{" "}
        </td>
        <td scope="row"><strong>{info.employee_name}</strong><br/>{'('+info.designation+')'}</td>
        {/* <td scope="row">  </td> */}
        <td scope="row">{info.branch} </td>
        <td scope="row"> {info.department} </td>
        <td scope="row"> {info.email} </td>
        <td scope="row">
          {info.status === "Received" ? (
            <span className="badge badge-success" style={{fontSize:"12px", color:"#ffffff"}}>Received</span>
          ) : (
            <span className="badge badge-warning" style={{fontSize:"12px", color:"#ffffff"}}>Pending</span>
          )}
        </td>
      </tr>
    );
  });
  return (
    <Col className="overflow-auto">
      <Table className="table table-hover">
        {table_head}
        <tbody>{table_body}</tbody>
      </Table>
      {/* <Pagination/> */}
    </Col>
  );
};

export default feedback_given_by;
