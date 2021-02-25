import React from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar(props) {
  return (
    <Form.Group className="mt-3">
      <Form.Control
        value={props.search}
        className="mx-auto"
        type="search"
        placeholder="Search Employees"
        onChange={(e) => {
          props.handleStateChange(e);
        }}
      />
    </Form.Group>
  );
}
