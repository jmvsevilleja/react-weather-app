import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";

export const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="bg-primary text-white py-4  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-white my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 mx-4"
          >
            <path
              fillRule="evenodd"
              d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
              clipRule="evenodd"
            />
          </svg>
          Weather Forcast
        </div>
        <nav className="hidden md:flex">
          <Link
            className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded"
            to="/weather"
          >
            Weather
          </Link>
        </nav>
        {isAuthenticated ? <LogoutButton /> : <span></span>}
      </div>
    </header>
  );
};
