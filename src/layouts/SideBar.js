import React from "react";
import { Link, NavLink } from "react-router-dom";
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
      <Link to={"/companies"}>
        <Menu.Item>
          <Icon name="industry" />
          Companies
        </Menu.Item>
      </Link>
      <Link to={"/advertisements"}>
        <Menu.Item>
          <Icon name="bullhorn" />
          Job Advertisements
        </Menu.Item>
      </Link>
    </Sidebar>
  );
};

export default SideBar;
