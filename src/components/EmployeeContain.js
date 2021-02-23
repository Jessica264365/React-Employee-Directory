import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import retrieveUsers from "./utils/RandomUserAPI";
import Container from "react-bootstrap/Container";
class EmployeeMain extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: [],
      isSorted: true,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleStateChange(e) {
    this.setState({ search: e.target.value });
  }
}

return (
  <>
    <Container fluid>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  </>
);
export default EmployeeMain;
