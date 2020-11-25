import React, { Component } from "react";
import { Table, Col} from "react-bootstrap";
import imgUrl from '../../assets/images/user-male-icon.png'

const feedback_given_by = (props) => {
  let table_head = (
    <thead>
      <tr >
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Designation</th>
        <th scope="col">Branch</th>
        <th scope="col">Department</th>
        <th scope="col">Dzongkhag</th>
      </tr>
    </thead>
  );
  let table_body = props.info.map((info, index) => {
    return (
      <tr key={index} style={{fontSize:'13px'}} >
        <td scope="row"> <img src={imgUrl} style={{height:'30px',width:'30px', borderRadius:'15px'}}/> </td>
        <td scope="row">{info.name}</td>
        <td scope="row"> {info.designation} </td>
        <td scope="row">{info.branch} </td>
        <td scope="row"> {info.department} </td>
        <td scope="row">{info.dzongkhag}</td>
      </tr>
    );
  });
  return (
    <Col className="overflow-auto">
      <Table className="table table-hover">
        {table_head}
        <tbody>{table_body}</tbody>
      </Table>
    </Col>
  );
};

export default feedback_given_by;
