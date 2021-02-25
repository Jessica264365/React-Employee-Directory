import Table from "react-bootstrap/Container";
import React from "react";

export default function EmployeeList(props) {

  const employees = props.employees;
  console.log(employees);

  const getLastName = (employee) => {
    return employee.name.last;
  };
  // Sort
  const isSorted = (getLastName, employeeArray) => {
    employeeArray.sort((a, b) => {
      const firstEmployee = getLastName(a);
      const nextEmployee = getLastName(b);
      if (firstEmployee < nextEmployee) {
        return -1;
      } else if (firstEmployee > nextEmployee) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  const isNotSorted = (getLastName, employeeArray) => {
    employeeArray.sort((a, b) => {
      const firstEmployee = getLastName(a);
      const nextEmployee = getLastName(b);
      if (nextEmployee < firstEmployee) {
        return -1;
      } else if (nextEmployee > firstEmployee) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  if (props.sort === true) {
    isSorted(getLastName, employees);
  } else {
    isNotSorted(getLastName, employees);
  }

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
                  <img
                    className="pl-3"
                    src={employee.picture.thumbnail}
                    alt={employee.name.first}
                  />
                </td>

                <td>{`${employee.name.first} ${employee.name.last}`}</td>
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
