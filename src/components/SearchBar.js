import React from "react";
import Form from "react-bootstrap/Form";

export function SearchBar(props) {
  return (
    <Form.Group className="mt-3">
      <Form.Control
        className="mx-auto"
        type="search"
        placeholder="Search Employees"
        onChange={(e) => {
          props.handleInput(e);
        }}
      />
    </Form.Group>
  );
}