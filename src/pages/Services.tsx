import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto h-[70vh] flex flex-col justify-center ">
      <div className="space-y-5 bg-gradient-to-bl from-blue-gray-100 px-16 py-24">
        <h1 className="text-4xl font-extrabold">Polish Your Shoes</h1>
        <p className="tracking-wide text-lg text-blue-gray-800 leading-loose">
          Our shoe shining service is the best in the city. We use only the best{" "}
          <br />
          products to make your shoes look like new. We guarantee you will be{" "}
          <br />
          satisfied with the results. We offer a variety of colors to choose
          from. <br />
          We also offer a discount for regular customers.
        </p>
        <p className="font-semibold text-blue-gray-700">Price: $10</p>
        <div className="flex justify-between">
          <Button
            placeholder={""}
            variant="outlined"
            className="hover:bg-black hover:text-white transition-all duration-300"
          >
            Request Service
          </Button>
          <NavLink to="/my-services" className="shadow-2xl">
            <Button placeholder={""} variant="gradient">
              My Requests
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
