import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { NavLink, useNavigate } from "react-router-dom";
import { getToken, setToken } from "../global";
import "../App.css"

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!userData.username || !userData.password) {
        alert("Please enter both username and password.");
        return;
      }

      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          login: userData.username,
          password: userData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseBody = await response.json();
      setToken(responseBody?.name);
      navigate(responseBody.role === "admin" ? "/users" : "/todos");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (getToken()) navigate("/");
  }, [navigate]);

  return (
    <div className=" flex min-h-screen items-center justify-center bg-green-100 ">
      <div className="forum w-full max-w-md rounded bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-3xl font-normal">Login</h1>
        <InputField
          label="Username"
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button
          className="mt-6 w-full rounded bg-slate-400 p-3 text-white hover:bg-slate-900 focus:outline-none"
          onClick={handleLogin}
          type="button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Log in"}
        </button>

        <NavLink
          className="mt-6 block rounded border border-slate-500 bg-transparent px-4 py-2 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
          to={"/"}
        >
          Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
