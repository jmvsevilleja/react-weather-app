import { useAuth0 } from "@auth0/auth0-react";
import SearchField from "../components/SearchField";
import SearchButton from "../components/SearchButton";

const HomePage = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {user?.picture} - {user?.name} - {user?.email} -{" "}
      {`https://github.com/${user?.nickname}`}
      <div>
        <SearchField />
        <SearchButton />
      </div>
    </div>
  );
};

export default HomePage;
