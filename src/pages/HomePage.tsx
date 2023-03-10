import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import WeatherScreen from "../screens/WeatherScreen";

const HomePage: React.FC = () => {
  const { user, isLoading } = useAuth0();
  const [screen, setScreen] = useState<string>("");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="md:m-20 xl:mx-60 mx-2 my-10">
      {screen === "" && (
        <div>
          <div className="flex justify-center text-ellipsis overflow-hidden">
            {user?.name}
          </div>
          <div className="flex justify-center text-ellipsis overflow-hidden">
            <a
              href={`https://github.com/${user?.nickname}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`https://github.com/${user?.nickname}`}
            </a>
          </div>
        </div>
      )}
      <WeatherScreen screen={screen} setScreen={setScreen} />
    </div>
  );
};

export default HomePage;
