import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ALLProducts from "../pages/ALLProducts";
import SalesHistory from "../pages/SalesHistory";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:'allProducts',
                element:<ALLProducts/>
            },
            {
                path:'salesHistory',
                element:<SalesHistory/>
            }
        ]
    },
    {
        path: "/login",
        element:<Login/>
    },
    {
        path: "/register",
        element:<Register/>
    }
])


export default router;