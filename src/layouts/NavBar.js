import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import SignedIn from "../components/SignedIn";
import SignedOut from "../components/SignedOut";

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  function handleSignOut() {
    setIsAuthenticated(false);
  }
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
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
