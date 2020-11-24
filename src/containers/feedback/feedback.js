import React, { Component } from "react";
import Feeds from "../../components/feeds/feeds";
import { Container, Col, Table, Row } from "react-bootstrap";
import Navigationbar from "../../components/navbar/navbar";

class FeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          competency_code: "CD3: Delivery003",
          competency: [
            {
              title:
                "To ensure closures and deliver on intended results prudently.",
              detail: [
                "Always conscious about resources against results.",
                "Culture of delegation.",
                "Focus on constant watch on policies, plans and activities.",
                "Emphasis on the culture of quality, timeline and targets.",
              ],
            },
            {
              title:
                "To steer and implement changes, and deals with uncertainties.",
              detail: [
                "Cautious of risks and competitions, but presence of courage to decide.",
                "Designs and defines effective organizational strategies.",
                "Change agent of the Bank.",
              ],
            },
            {
              title:
                "To build organizational capacity and harness individual potentials",
              detail: [
                "There are efforts to maintain and enhance such in line with the vision.",
                "Understands the type of capacities and capabilities required for the Bank.",
              ],
            },
          ],
        },
        {
          competency_code: "CD2: Drive004",
          competency: [
            {
              title: "To communicate effectively.",
              detail: [
                "There is clarity in logic, principle, objectives and expectations.",
                "There is transparent sharing of information.",
                "Opening up oneself to others and also understanding others.",
              ],
            },
            {
              title: "To exemplify personal drive and integrity.",
              detail: [
                "Always guided by the interest of the Bank.",
                "Known for working based on what is right and wrong and what is good and bad",
                "There is high level of sincere self-association with the Bank.",
              ],
            },
            {
              title: "To cultivate positive and conducive work culture",
              detail: ["Always approachable and appreciative of subordinates."],
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Navigationbar />
        <Container>
          <Col sm={12} md={12} lg={12} xs={12}>
            <br />
            <span style={{ fontWeight: "bold", color: "#4d79ff" }}>
              Feedback given to:
            </span>
            &nbsp;&nbsp;
            <span style={{ fontWeight: "bold" }}>
              Pema Wangmo, HR, Bumthang Branch
            </span>
            <hr />
            {this.state.data.map((x, index) => {
              return (
                <Row key={index}>
                  <Col lg={3}>
                    {" "}
                    <strong>{x.competency_code}</strong>
                  </Col>
                  <Col lg={9}>
                    {x.competency.map((c, i) => {
                      return <Feeds key={i} index={i} data={c} />;
                    })}
                    <hr />
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Container>
      </div>
    );
  }
}

export default FeedBack;
