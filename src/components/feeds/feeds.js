import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import UL from "./ul";

const feeds = (props) => {
    let tableBody = props.data.map((x,index) =>{
        return (
            <tr key={index}>
                <td>{x.competency_code}</td>
            </tr>
        )
    })
  return (
    <div>
      <br />
      <span style={{ fontWeight: "bold", color: "#4d79ff" }}>
        Feedback given to:
      </span>
      &nbsp;&nbsp;
      <span style={{ fontWeight: "bold" }}>
        Pema Wangmo, HR, Bumthang Branch
      </span>
      <hr />
      <Row>
        <Col className="overflow-auto">
          <Table className="table table-bordered">
            <tbody>
              {tableBody}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default feeds;
