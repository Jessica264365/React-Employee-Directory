import Table from "react-bootstrap/Container";
import React, { Component } from "react";

export default function EmployeeList(props) {
  const employees = props.employees;
  console.log(employees);
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th onClick={props.handleSort}>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee) => {
            return (
              <tr>
                <td>
                  {" "}
                  <img className="pl-3" src={employee.picture.thumbnail} />
                </td>

                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.location.city}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td> </td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
