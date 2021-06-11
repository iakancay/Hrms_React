import React, { useEffect, useState } from "react";
import { Button, Card, Label } from "semantic-ui-react";
import AdvertisementsService from "../services/AdvertisementsService";

const AdvertisementCard = () => {
  const [advertisements, setAdvertisement] = useState([]);
  useEffect(() => {
    let advertisementsService = new AdvertisementsService();
    advertisementsService
      .getAdvertisements()
      .then((result) => setAdvertisement(result?.data?.data));
  }, []);

  return (
    <div className="advertisementCard">
      <Card.Group itemsPerRow={2}>
        {advertisements.map((advertisement) => (
          <Card fluid className="jobCard">
            <Card.Content>
              <Label as="a" color="red" attached="top right">
                {new Date(advertisement.deadline).toLocaleDateString()}
              </Label>

              {/* <Icon name="factory" size="large" attached="right" /> */}
              <Card.Header as={"h2"}>
                {advertisement.company.companyName}
              </Card.Header>

              <Card.Meta>{advertisement.city.cityName}</Card.Meta>
              <Card.Description>{advertisement.jobInfo}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Apply
                </Button>
                <Button basic color="teal">
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

<Card.Group></Card.Group>;

export default AdvertisementCard;
