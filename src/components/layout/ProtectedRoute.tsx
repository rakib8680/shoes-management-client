import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  TUser,
  logOut,
  selectCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  let user;

  if (token) {
    user = verifyToken(token);
  }

  if (role && role !== (user as TUser)?.role) {
    toast.error("Your are not Authorized", { duration: 3000 });
    dispatch(logOut());
  }

  return children;
};

export default ProtectedRoute;
