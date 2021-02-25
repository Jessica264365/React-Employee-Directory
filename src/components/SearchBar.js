import React from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar(props) {
  return (
    // Pass the handleStateChange handler as a prop to be used in the search bar
    <Form.Group className="mt-3">
      <Form.Control
        value={props.search}
        className="mx-auto"
        type="search"
        placeholder="Search"
        onChange={(e) => {
          props.handleStateChange(e);
        }}
      />
    </Form.Group>
  );
}
