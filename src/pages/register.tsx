import { Button, Input, Typography } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (loginInfo: FieldValues) => {
   console.log(loginInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-gray-600 to-white ">
      <div className="bg-gradient-to-br from-white to-blue-gray-300 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          Sign Up !
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-7 mb-10 mt-10">
            <div className="w-full">
              <Input crossOrigin={""} {...register("name")} label="Name" />
            </div>
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
            sign Up
          </Button>
        </form>
        <Typography
          placeholder={""}
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?
          <NavLink
            to="/login"
            className="font-medium text-gray-900 text-sm ps-3 hover:underline"
          >
            Login
          </NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default Register;
