import React from "react";
import Dashboard from "./Dash";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./MainLayout.css";
import { Grid } from "semantic-ui-react";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <NavBar />
      <Grid floated>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Dashboard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainLayout;
