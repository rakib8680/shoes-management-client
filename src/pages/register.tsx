import { Button, Input, Typography } from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (registerInfo: FieldValues) => {
    const toastId = toast.loading("Loading...");

    try {
      await registerUser(registerInfo);
      toast.success("Registration successful", { id: toastId, duration: 2000 });
      navigate("/login");
      toast.info("Please Login Now", { duration: 3000 });
    } catch (error) {
      toast.error("Registration failed", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="login-reg-container">
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
