import { Button, Input, Typography } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (loginInfo: FieldValues) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await login(loginInfo).unwrap();
      const user = verifyToken(res.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.accessToken }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate("/allProducts");
    } catch (error) {
      toast.error("Invalid Email or Password", { id: toastId, duration: 2000 });
    }
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
