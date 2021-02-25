import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import retrieveUsers from "../utils/RandomUserAPI";
import Container from "react-bootstrap/Container";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

class EmployeeMain extends Component {
  //constructor function for component
  constructor() {
    super();
    this.state = {
      search: "",
      employees: [],
      sort: true,
    };
  }
  // Handle the change in the search bar when a user types in it
  handleStateChange = (e) => {
    this.setState({ search: e.target.value });
  };
  // Handle the state change of the sort
  handleSort = () => {
    this.state.sort === true
      ? this.setState({ sort: false })
      : this.setState({ sort: true });
  };
  // When the component mounts preform the Random User API call
  componentDidMount() {
    this.getUsersApi();
  }
  // Random User API call
  getUsersApi = () => {
    retrieveUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };
  // filter through the array of employees and return names that contain the letters typed into the search box
  render() {
    let filterByName = this.state.employees.filter((employee) => {
      let name = `${employee.name.first} ${employee.name.last}`;
      return name.toLowerCase().includes(this.state.search.toLowerCase())
        ? true
        : false;
    });

    let employeeSort;
    // If the search bar is empty just display the employees as they are
    if (this.state.search === "") {
      employeeSort = this.state.employees;
    } else {
      // otherwise filter through the employees by name
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
