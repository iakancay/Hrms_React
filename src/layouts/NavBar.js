import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import AvatarDropdown from "../components/AvatarDropdown";

export default function NavBar() {
  return (
    <div style={{ width: "100%", height: 50 }}>
      <Menu inverted secondary color="teal">
        <Menu.Item>
          <Icon name="cogs" size="big" />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>HRMS</span>
        </Menu.Item>
        <Menu.Item name="Home" />
        <Menu.Menu position="right">
          <Menu.Item>
            <AvatarDropdown />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
