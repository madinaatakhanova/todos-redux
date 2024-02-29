import { NavLink, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../global";
import "../App.css"

function HomePage() {
  const token = getToken();
  const navigate = useNavigate();
  return (
    <div className="h-20 w-full bg-gray-200 p-4">
      <div className="container mx-auto flex max-w-7xl justify-between items-center text-center px-2 sm:px-6 lg:px-8">
        <NavLink
          className={
            "flex justify-end rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-gray-800"
          }
          to={"/"}
        >
          {"Home"}
        </NavLink>
        {token ? (
          <h1
            className={
              "flex cursor-pointer justify-center rounded-md px-5 py-3 text-sm font-bold text-center text-gray-900 hover:bg-gray-900 hover:text-gray-800"
            }
            onClick={() => {
              removeToken();
              navigate("/login");
            }}
          >
            Log out
          </h1>
        ) : (
          <h1
            className={
              "flex cursor-pointer justify-end rounded-md  px-5 py-3 text-sm font-medium text-center text-gray-600 hover:bg-gray-300 hover:text-gray-800"
            }
            onClick={() => {
              if (!token) navigate("/login");
            }}
          >
            login
          </h1>
        )}

        {token && (
          <NavLink
            className={
              "flex justify-end rounded-md px-5 py-3 text-sm font-medium text-center text-gray-600 hover:bg-gray-300 hover:text-gray-800"
            }
            to={"/todos"}
          >
            {"Todos"}
          </NavLink>
        )}
      </div>
      <div className="mt-4 flex h-screen w-full justify-center py-12 text-center font-bold text-5xl">
        HOME PAGE
      </div>
    </div>
  );
}

export default HomePage;
