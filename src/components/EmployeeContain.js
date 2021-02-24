import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import retrieveUsers from "./utils/RandomUserAPI";
import Container from "react-bootstrap/Container";
import EmployeeList from "./EmployeeList";
class EmployeeMain extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: [],
      sort: true,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleStateChange(e) {
    this.setState({ search: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      search: "",
    });
  }
  handleSort() {
    this.state.sort === true
      ? this.setState({ sort: false })
      : this.setState({ sort: true });
  }
  render() {
    let filterByName = this.state.results.filter((employee) => {});

    let employeeSort;

    if (this.state.search === "") {
      employeeSort = this.state.employees;
    } else {
      employeeSort = filterByName;
    }

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <EmployeeList />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EmployeeMain;
