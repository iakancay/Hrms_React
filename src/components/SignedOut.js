import React from "react";
import { Button } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button color="red" onClick={signIn}>
        Sign In
      </Button>
      <Button color="red">Sign Up</Button>
    </div>
  );
}
