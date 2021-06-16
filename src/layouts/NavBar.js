import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div style={{ width: "100%", height: 50, zIndex: "999" }}>
      <Menu inverted secondary color="teal">
        <Menu.Item>
          <Icon name="cogs" size="big" />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>HRMS</span>
        </Menu.Item>
        <Menu.Item name="Home" />
        <Menu.Item name="Add CV" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to={"/new-ad"}>Post New Ad</Link>
          </Menu.Item>
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
