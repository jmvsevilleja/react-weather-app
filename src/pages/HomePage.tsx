import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { user } = useAuth0();
  console.log("user", user);
  return (
    <div>
      {user?.picture} - {user?.name} - {user?.email} -{" "}
      {`https://github.com/${user?.nickname}`}
    </div>
  );
};

export default HomePage;
