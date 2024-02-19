import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RequestPolish } from "../components/ui/PolishRequestModal";
import { LiaTasksSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="container mx-auto md:h-[70vh] flex flex-col justify-center px-5 md:px-0 ">
      <div className="space-y-5 bg-gradient-to-bl from-blue-gray-100 px-6 py-10 mt-20 mb-20 md:mb-0 md:px-16 md:py-24">
        <h1 className="text-4xl font-extrabold">Polish Your Shoes</h1>
        <p className="md:tracking-wide md:text-lg text-blue-gray-800 md:leading-loose">
          Our shoe shining service is the best in the city. We use only the best{" "}
          <br />
          products to make your shoes look like new. We guarantee you will be{" "}
          <br />
          satisfied with the results. We offer a variety of colors to choose
          from. <br />
          We also offer a discount for regular customers.
        </p>
        <p className="font-semibold text-blue-gray-700">Price: $10</p>
        <div className="md:flex justify-between items-center">
          <RequestPolish />
          <NavLink to="/my-services" className="">
            <Button
              placeholder={""}
              variant="gradient"
              className="rounded-none mt-4 md:mt-0 flex gap-2 "
            >
              <LiaTasksSolid size={15} />
              My Requests
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
