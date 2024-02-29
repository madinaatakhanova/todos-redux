import { NavLink } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-red-800 py-8">
          ERROR
        </h1>
        <NavLink
          to="/"
          className="px-4 py-2 text-white transition duration-300 bg-[#227937] rounded-full hover:bg-[#103b1bc2]"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};
export default ErrorLayout;
