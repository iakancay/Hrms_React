import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const SideBar = () => {
  return (
    <Sidebar
      as={Menu}
      icon="labeled"
      vertical
      visible
      width="big"
      inverted
      color="teal"
      animation="overlay"
      style={{ top: 50, height: "100%" }}
    >
      <Menu.Item as="a">
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="industry" />
        Companies
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="bullhorn" />
        Job Advertisements
      </Menu.Item>
    </Sidebar>
  );
};

export default SideBar;
