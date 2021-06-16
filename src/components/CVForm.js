import React from "react";
import { Button, Form, Input, Select } from "semantic-ui-react";

export default function CVForm() {
  return (
    <div>
      <Form unstackable size="large" style={{ marginTop: "75px" }}>
        <Form.Field
          id="form-input-control-job-info"
          control={Input}
          label="Job Info"
          placeholder="Job Info"
        />
        <Form.Group inline>
          <Form.Field
            id="form-input-control-min-salary"
            control={Input}
            label="Min Salary"
            placeholder="Min Salary"
          />
          <Form.Field
            id="form-input-control-max-salary"
            control={Input}
            label="Max Salary"
            placeholder="Max Salary"
          />
          <Form.Field
            id="form-input-control-qota"
            control={Input}
            label="Qota"
            placeholder="Qota"
          />
        </Form.Group>

        <Form.Group widths={"three"}>
          <Form.Field
            control={Select}
            options={positions}
            label={{
              children: "Job Position",
              htmlFor: "form-select-control-jobPosition",
            }}
            placeholder="Job Position"
            search
            searchInput={{ id: "form-select-control-position" }}
            width={6}
          />
          <Form.Field label="Working Time" control="select" width={6}>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
          </Form.Field>
          <Form.Field
            control={Select}
            options={cities}
            label={{
              children: "City",
              htmlFor: "form-select-control-city",
            }}
            placeholder="City"
            search
            searchInput={{ id: "form-select-control-city" }}
            width={4}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            id="form-input-control-deadline"
            control={Input}
            label="Deadline"
            placeholder="YYYY-MM-DD"
          />
        </Form.Group>
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Send"
          primary
        />
      </Form>
    </div>
  );
}
