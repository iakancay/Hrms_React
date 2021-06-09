/* eslint-disable no-octal-escape */
import React from "react";
import { Dropdown, Header, Icon, Image } from "semantic-ui-react";
import image from "../images/123.jpg";

export default function AvatarDropdown() {
  return (
    <div>
      <Image src={image} avatar />
      <span>
        <Dropdown text="Ibrahim AKANCAY" pointing>
          <Dropdown.Menu>
            <Dropdown.Header>My Profile</Dropdown.Header>
            <Dropdown.Item>Inbox</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    </div>
  );
}
