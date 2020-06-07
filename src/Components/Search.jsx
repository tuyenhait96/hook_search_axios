import React, { useState, useRef } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";

function Search({ searchUser }) {
  const [query, setQuery] = useState("");
  const typingTimeoutRef = useRef(null);

  const searchSubmit = (e) => {
    console.log(e.target.value);

    setQuery(e.target.value);
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
          searchUser(query);
        }, 300);
      }}
    >
      <FormGroup>
        <Label for="searchId">Username</Label>
        <InputGroup>
          <Input
            onChange={searchSubmit}
            type="text"
            name="search"
            id="searchId"
            value={query}
            placeholder="Github UserName..."
          />
          <InputGroupAddon addonType="append">
            <Button color="warning" type="submit">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default Search;
