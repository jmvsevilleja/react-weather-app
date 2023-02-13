import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LogoutButton from "./components/LogoutButton";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/weather">Weather</Link>
            {isAuthenticated && <LogoutButton />}
          </nav>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuthenticated ? <HomePage /> : <LoginPage />}
            />
            <Route
              path="/weather"
              element={isAuthenticated ? <WeatherPage /> : <LoginPage />}
            />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
