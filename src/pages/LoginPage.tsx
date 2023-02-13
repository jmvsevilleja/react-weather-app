import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    // redirect to home when logged in
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="md:m-40 xl:mx-96 m-10">
      <div className="flex flex-col justify-center space-y-4 ">
        <div className="">
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </div>
        <div className="flex justify-start">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
