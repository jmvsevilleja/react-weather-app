import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect to home when logged in
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
            clipRule="evenodd"
          />
        </svg>
        Weather Forcast
      </div>
      <p>
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
