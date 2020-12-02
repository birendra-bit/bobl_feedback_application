import React from "react";
import { Table, Button } from "react-bootstrap";
import imgUrlMale from "../../assets/images/user-male-icon.png";
import imgUrlFemale from "../../assets/images/female-user.jpeg";

const table = (props) => {
  const {
    info,
    incrementIndex,
    decrementIndex,
    sortData,
    initialIndex,
    endIndex,
    lastIndex,
    changeEndIndex,
  } = props;

  if (!info.length) return <strong>No Data To Display</strong>;

  let table_head = (
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>Branch</th>
        <th>Department</th>
        <th>Email</th>
        <th className="d-flex">
          <select
            style={{ border: "none", fontWeight: "bold" }}
            onChange={(e) => sortData(e.target.value)}
          >
            <option>Status</option>
            <option>Pending</option>
            <option>Received</option>
          </select>
        </th>
      </tr>
    </thead>
  );
  let table_body = info.map((info, index) => {
    return (
      <tr key={index} style={{ fontSize: "13px" }}>
        <td scope="row">{initialIndex + index + 1}</td>
        <td scope="row">
          <img
            src={
              info.image
                ? "http://192.168.70.38" + info.image
                : info.gender === "Male"
                ? imgUrlMale
                : imgUrlFemale
            }
            style={{ height: "30px", width: "30px", borderRadius: "15px" }}
          />
        </td>
        <td>
          <strong>{info.employee_name}</strong>
          <br />
          {"(" + info.designation + ")"}
        </td>
        <td>{info.branch} </td>
        <td> {info.department} </td>
        <td> {info.email} </td>
        <td>
          {info.status === "Received" ? (
            <span
              className="badge badge-success"
              style={{ fontSize: "12px", color: "#ffffff" }}
            >
              {info.status}
            </span>
          ) : (
            <span
              className="badge badge-warning"
              style={{ fontSize: "12px", color: "#ffffff" }}
            >
              {info.status}
            </span>
          )}
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <Table className="table table-hover">
        {table_head}
        <tbody>{table_body}</tbody>
      </Table>
      {initialIndex >= 10 ? (
        <Button className="btn-sm" onClick={decrementIndex}>
          Prev Page
        </Button>
      ) : (
        ""
      )}
      {endIndex <= lastIndex ? (
        <Button
          className="btn-sm"
          onClick={incrementIndex}
          style={{ float: "right" }}
        >
          Next Page
        </Button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default table;
