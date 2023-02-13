import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button text="Log In" onClick={() => loginWithRedirect()} />;
};

export default LoginButton;
