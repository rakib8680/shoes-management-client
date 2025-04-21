import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RequestPolish } from "../components/ui/PolishRequestModal";
import { LiaTasksSolid } from "react-icons/lia";
import { FaShoePrints, FaWandMagicSparkles } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="container mx-auto  flex flex-col justify-center px-5 md:px-0 ">
        {/* polishing service  */}
        <div className="bg-gradient-to-bl from-blue-gray-100 md:mb-0 services-container">
          <h1 className="text-4xl font-extrabold">Polish Your Shoes</h1>
          <p className=" md:text-lg services-paragraph">
            Our shoe shining service is the best in the city. We use only the
            best <br />
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
                className="rounded-none mt-4 md:mt-0 flex gap-2"
              >
                <LiaTasksSolid size={15} />
                My Requests
              </Button>
            </NavLink>
          </div>
        </div>

        {/* customize shoe  */}
        <div className="custom-service-cont">
          <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">
            Make Your Own <br />
            <span className="custom-text from-black via-red-600 to-yellow-500 ">
              Customized
            </span>{" "}
            <span className="custom-text from-yellow-500 via-red-600 to-black">
              Shoe
            </span>
          </h1>
          <p className=" text-xs md:text-md  services-paragraph">
            Experience the freedom of creating your own style with our shoe
            customization service. This unique offering allows you to
            personalize your footwear down to the smallest detail. You have the
            power to choose the color, ensuring your shoes are the perfect match
            for your outfit or mood. Select the material, from luxurious leather
            to sustainable textiles, to suit your comfort and lifestyle needs.
            Finally, make your mark with the design. Whether you prefer a sleek,
            minimalist look or want to make a statement with bold patterns, the
            choice is yours. Customize your own shoe and step out in style
            that's uniquely you.
          </p>
          <p className="font-semibold text-blue-gray-900">
            Starting From : $ 99
          </p>
          <div className="custom-service-btn-cont">
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">Make a Customized Shoe</p>
              <Button
                placeholder={""}
                variant="outlined"
                className="square-btn flex gap-3  items-center"
              >
                Create
                <FaWandMagicSparkles size={15} />
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">View My Customized Shoes</p>
              <Button
                placeholder={""}
                variant="gradient"
                className="rounded-none md:mt-0 flex gap-2"
              >
                My Shoes
                <FaShoePrints size={15} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
