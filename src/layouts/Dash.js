import React from "react";
import { Route } from "react-router";
import AdvertisementList from "../pages/AdvertisementList";

import CompanyList from "../pages/CompanyList";

const Dash = () => {
  return (
    <div>
      <Route exact path="/" component={AdvertisementList} />
      <Route exact path="/advertisements" component={AdvertisementList} />
      <Route path="/companies" component={CompanyList} />
    </div>
  );
};

export default Dash;
