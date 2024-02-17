import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ALLProducts from "../pages/ALLProducts";
import SalesHistory from "../pages/SalesHistory";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Services from "../pages/Services";
import VerifyProduct from "../pages/VerifyProduct";
import MyServices from "../pages/MyServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role={undefined}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "allProducts",
        element: <ALLProducts />,
      },
      {
        path: "salesHistory",
        element: (
          <ProtectedRoute role="seller">
            <SalesHistory />
          </ProtectedRoute>
        ),
      },
      {
        path: "services",
        element: (
          <ProtectedRoute role="buyer">
            <Services />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-services",
        element: (
          <ProtectedRoute role="buyer">
            <MyServices />
          </ProtectedRoute>
        ),
      },
      {
        path: "verifyProduct",
        element: (
          <ProtectedRoute role="buyer">
            <VerifyProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
