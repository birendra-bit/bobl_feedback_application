import React, { Component } from "react";
import { Table, Col } from "react-bootstrap";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";
import Pagination from '../pagination/pagination'

const feedback_given_by = (props) => {
  let table_head = (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Designation</th>
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
        <td scope="row">{info.employee_name}</td>
        <td scope="row"> {info.designation} </td>
        <td scope="row">{info.branch} </td>
        <td scope="row"> {info.department} </td>
        <td scope="row"> {info.email} </td>
        <td scope="row">
          {info.status === "Received" ? (
            <span style={{ fontWeight: "bolder", color: "green" }}>
              &#10003;
            </span>
          ) : (
            <span style={{ fontWeight: "bolder", color: "red" }}>&#10007;</span>
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
      <span>
        Received:{" "}
        <span style={{ fontWeight: "bolder", color: "green" }}>&#10003;</span>{" "}
      </span>
      &nbsp;&nbsp;
      <span>
        Pending:{" "}
        <span style={{ fontWeight: "bolder", color: "red" }}>&#10007;</span>
      </span>
      <Pagination/>
    </Col>
  );
};

export default feedback_given_by;
