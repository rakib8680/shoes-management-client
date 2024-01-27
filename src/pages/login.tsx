import { Button, Input, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-gray-400 ">
      <div className="bg-gradient-to-br from-white to-blue-gray-300 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          Please Login !
        </h2>
        <form>
          <div className="space-y-7 mb-10 mt-10">
            <div className="w-full">
              <Input crossOrigin={""} label="Email" />
            </div>
            <div className="w-full">
              <Input crossOrigin={""} label="Password" />
            </div>
          </div>
        </form>
        <Button placeholder={""} className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography
          placeholder={""}
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Don't have an account?
          <NavLink
            to="/register"
            className="font-medium text-gray-900 text-sm ps-3 hover:underline"
          >
            Sign Up
          </NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
