import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (loginInfo) => {
    
  const  res = await login(loginInfo).unwrap()
  dispatch(setUser({user:{}, token:res.accessToken}))
  console.log(res);

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-gray-600 to-white ">
      <div className="bg-gradient-to-br from-white to-blue-gray-300 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          Please Login !
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-7 mb-10 mt-10">
            <div className="w-full">
              <Input crossOrigin={""} {...register("email")} label="Email" />
            </div>
            <div className="w-full">
              <Input
                crossOrigin={""}
                {...register("password")}
                label="Password"
              />
            </div>
          </div>
          <Button type="submit" placeholder={""} className="mt-6" fullWidth>
            sign in
          </Button>
        </form>
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
