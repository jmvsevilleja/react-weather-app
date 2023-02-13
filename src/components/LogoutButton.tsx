import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      text="Log Out"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="m-2"
    />
  );
};

export default LogoutButton;
