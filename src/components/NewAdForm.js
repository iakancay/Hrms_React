import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "semantic-ui-react";
import CityService from "../services/CityService";
import PositionService from "../services/PositionService";

export default function NewAdForm() {
  const [positions, setPositions] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let positionService = new PositionService();
    positionService.getPositions().then((result) => {
      const positionOptions = result?.data.map(({ id, positionName }) => ({
        key: String(id),
        text: positionName,
        value: id,
      }));
      setPositions(positionOptions);
    });
  }, []);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {
      const cityOptions = result?.data?.data.map(({ id, cityName }) => ({
        key: String(id),
        text: cityName[0].toUpperCase() + cityName.substring(1).toLowerCase(),
        value: id,
      }));
      setCities(cityOptions);
    });
  }, []);

  return (
    <div>
      <Form unstackable size="large" style={{ marginTop: "75px" }}>
        <Form.Field
          id="form-input-control-job-info"
          control={Input}
          label="Job Info"
          placeholder="Job Info"
        />
        <Form.Group inline widths="equal">
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

        <Form.Group widths="equal">
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
          />
          <Form.Field label="Working Time" control="select">
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
