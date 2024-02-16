import { Input } from "@material-tailwind/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const VerifyProduct = () => {
  return (
    <div className="container mx-auto py-10 h-[60vh] flex flex-col items-center justify-center gap-20">
      <h1 className="text-center text-3xl font-black">Verify Your Product !</h1>
      <div className="w-3/6 flex">
        <Input
          crossOrigin={""}
          className="!text-xl !text-blue-gray-900"
          size="lg"
          variant="standard"
          label="Unique ID"
          placeholder="Enter Your Product's Unique ID"
        />
        <button className="custom-button flex items-center gap-2 px-3">
          <p>Verify</p>
          <FaArrowUpRightFromSquare size={14} />
        </button>
      </div>
    </div>
  );
};

export default VerifyProduct;
