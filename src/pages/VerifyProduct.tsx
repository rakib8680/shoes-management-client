import { Input, Spinner } from "@material-tailwind/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useVerifyProductQuery } from "../redux/features/Services/serviceApi";
import { useState } from "react";

const VerifyProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [uniqueId, setUniqueId] = useState("");
  const {
    data: verifiedData,
    error,
    isLoading,
  } = useVerifyProductQuery(uniqueId, {
    skip: !uniqueId,
  });

  // verify Product 
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setUniqueId(data.uniqueId);
    reset();
  };

  return (
    <div className="verifyProduct-container">
      <h1 className="text-center text-3xl font-black">Verify Your Product !</h1>
      <form
        className=" md:w-4/6 lg:w-3/6 flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          crossOrigin={""}
          className="!text-xl !text-blue-gray-900"
          size="lg"
          variant="standard"
          label="Unique ID"
          placeholder="Enter Your Product's Unique ID"
          {...register("uniqueId", { required: true })}
        />
        <button
          type="submit"
          className="custom-button flex items-center gap-2 px-3"
        >
          <p>Verify</p>
          <FaArrowUpRightFromSquare size={14} />
        </button>
      </form>

      {error && (
        <p className="text-red-800 text-center text-lg lg:text-2xl  bg-pink-50 px-14 py-3">
          {error?.data?.errorMessage} ❌
        </p>
      )}
      {isLoading && <Spinner className="h-10 w-10" color="indigo" />}
      <div>
        {verifiedData && !error && (
          <div className="">
            <h1 className="text-green-800 text-lg lg:text-2xl bg-lime-50 px-14 py-3 text-center">
              Your Product Is Authentic ✔
            </h1>
            <div className="flex flex-col-reverse gap-6 md:flex-row lg:gap-60 items-center tracking-wide">
              <div className=" bg-blue-gray-50 p-7  space-y-3 ">
                <p>
                  <span className="shoe-details">Product Name :</span>
                  {verifiedData?.data?.name}
                </p>
                <p>
                  <span className="shoe-details">Product Price :</span>
                  {verifiedData?.data?.price}
                </p>
                <p>
                  <span className="shoe-details">Product Quantity :</span>
                  {verifiedData?.data?.quantity}
                </p>
                <p>
                  <span className="shoe-details">Product Sizes :</span>
                  {verifiedData?.data?.size.join(",")}
                </p>
                <p>
                  <span className="shoe-details">Product Model :</span>
                  {verifiedData?.data?.model}
                </p>
                <p>
                  <span className="shoe-details">Product Color :</span>
                  {verifiedData?.data?.color}
                </p>
                <p>
                  <span className="shoe-details">Product Style :</span>
                  {verifiedData?.data?.style}
                </p>
              </div>
              <div className="">
                <img className="w-96" src={verifiedData?.data?.photoUrl} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyProduct;
