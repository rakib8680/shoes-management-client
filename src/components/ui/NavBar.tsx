import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";



const NavBar = () => {

  const dispatch = useAppDispatch();

  const handleLogOut= ()=>{
    dispatch(logOut())
    toast.error('LogOut successful', {duration:2000} )
  }

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" max-h-[768px] w-full">
      <Navbar
        placeholder={""}
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:pl-8 lg:pr-20 lg:py-4  bg-gradient-to-br from-blue-gray-200 to-blue-gray-50"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            placeholder={""}
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
          >
            Shoe Management
          </Typography>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-10  ">
              <NavLink to="/allProducts">
                <Button
                  placeholder={""}
                  variant="gradient"
                  size="md"
                  className="hidden lg:inline-block"
                >
                  All Products
                </Button>
              </NavLink>
              <NavLink to="salesHistory">
                <Button
                  placeholder={""}
                  variant="outlined"
                  size="md"
                  className="hidden lg:inline-block"
                >
                  Sales History
                </Button>
              </NavLink>
            </div>
            <IconButton
              placeholder={""}
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <Button
            onClick={handleLogOut}
            placeholder={""}
            variant="filled"
            size="sm"
            className="hidden lg:inline-block bg-pink-900 rounded-md"
          >
            LogOut
          </Button>
        </div>

        {/* for mobile  */}
        <Collapse open={openNav}>
          <div className="flex flex-col items-center gap-3 my-5">
            <NavLink to="/allProducts">
              <Button
                placeholder={""}
                fullWidth
                variant="gradient"
                size="sm"
                className=""
              >
                All Products
              </Button>
            </NavLink>
            <NavLink to="salesHistory">
              <Button
                placeholder={""}
                fullWidth
                variant="outlined"
                size="sm"
                className=""
              >
                Sales History
              </Button>
            </NavLink>
            <Button
            onClick={handleLogOut}
              placeholder={""}
              variant="filled"
              size="sm"
              className=" bg-pink-900 rounded-md mt-7 text-[10px] px-3 py-1"
            >
              LogOut
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
