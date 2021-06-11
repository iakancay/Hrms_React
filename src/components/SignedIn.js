/* eslint-disable no-octal-escape */
import React from "react";
import { Dropdown, Icon, Image } from "semantic-ui-react";
import image from "../images/123.jpg";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Image src={image} avatar />
      <span>
        <Dropdown text="Ibrahim AKANCAY" pointing>
          <Dropdown.Menu>
            <Dropdown.Item icon="user">
              <Icon name="user" />
              My Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="inbox" />
              Inbox
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name="setting" />
              Settings
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut}>
              <Icon name="sign-out" />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    </div>
  );
}
