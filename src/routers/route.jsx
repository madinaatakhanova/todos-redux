import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Todos from "../pages/Todos";
import HomePage from "../components/HomePage";
import ErrorLayout from "../layouts/ErrorLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/todos",
      element: <Todos />,
    },
    {
      path: "*",
      element: <ErrorLayout />,
    },
  ]);

  return routes;
}
