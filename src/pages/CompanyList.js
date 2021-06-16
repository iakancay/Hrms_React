import React, { useEffect, useState } from "react";
import { Card, Header, Icon } from "semantic-ui-react";
import CompanyService from "../services/CompanyService";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let companyService = new CompanyService();
    return companyService
      .getCompanies()
      .then((result) => setCompanies(result?.data?.data));
  }, []);
  return (
    <div>
      <Header style={{ textAlign: "center", marginTop: "20px" }} as="h1">
        COMPANIES
      </Header>
      <Card.Group centered>
        {companies.map((company) => (
          <Card
            fluid
            raised
            centered
            color="red"
            style={{ width: "400px", marginTop: "20px" }}
          >
            <Card.Content>
              <Header as="h3">{company?.companyName}</Header>
            </Card.Content>
            <Card.Content>
              <Icon name="mail" />
              {company?.email}
            </Card.Content>
            <Card.Content>
              <Icon name="call" />
              {company?.phone}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
