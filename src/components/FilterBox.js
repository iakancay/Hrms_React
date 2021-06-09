import React from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const FilterBox = () => {
  return (
    <div>
      {/* <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Company Name" placeholder="Company Name" />
          <Form.Input fluid label="Min Salary" placeholder="Min Salary" />
          <Form.Select
            fluid
            label="Cities"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label="Small" value="sm" />
          <Form.Radio label="Medium" value="md" />
          <Form.Radio label="Large" value="lg" />
        </Form.Group>
        
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form> */}
    </div>
  );
};

export default FilterBox;
