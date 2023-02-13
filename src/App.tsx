import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import { Header } from "./layout/Header";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />
          <main className="px-6 py-4">
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
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
