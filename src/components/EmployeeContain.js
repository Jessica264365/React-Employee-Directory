import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import retrieveUsers from "./utils/RandomUserAPI";
import Container from "react-bootstrap/Container";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

class EmployeeMain extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: [],
      sort: true,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
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
  componentDidMount() {
    this.getUsersApi();
  }
  getUsersApi = () => {
    retrieveUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    let filterByName = this.state.employees.filter((employee) => {
      let name = `${employee.name.first} ${employee.name.last}`;
      return name.toLowerCase().includes(this.state.search.toLowerCase())
        ? true
        : false;
    });

    let employeeSort;

    if (this.state.search === "") {
      employeeSort = this.state.employees;
    } else {
      employeeSort = filterByName;
    }
    console.log(employeeSort);
    return (
      <>
        <Container fluid>
          <Row>
            <SearchBar
              search={this.state.search}
              handleStateChange={this.handleStateChange}
            />
          </Row>
          <Row>
            <Col>
              <EmployeeList
                employees={employeeSort}
                sort={this.state.sort}
                handleSort={this.handleSort}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EmployeeMain;
