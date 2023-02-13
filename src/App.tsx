import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        {isAuthenticated ? "Authenticated" : "not Authenticated"}
        <LoginPage />
        <HomePage />
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
