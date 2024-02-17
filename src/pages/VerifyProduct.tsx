import { Input } from "@material-tailwind/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useVerifyProductQuery } from "../redux/features/Services/serviceApi";
import { useState } from "react";

// start-from-here

const VerifyProduct = () => {
  const { register, handleSubmit } = useForm();
  // const [verifiedProduct, setVerifiedProduct] = useState({});
  const [uniqueId, setUniqueId] = useState("");
  const { data: verifiedData, error } = useVerifyProductQuery(uniqueId, {
    skip: !uniqueId,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setUniqueId(data.uniqueId);
  };

  console.log(verifiedData, error);

  return (
    <div className="container mx-auto py-10 h-[60vh] flex flex-col items-center justify-center gap-20">
      <h1 className="text-center text-3xl font-black">Verify Your Product !</h1>
      <form className="w-3/6 flex" onSubmit={handleSubmit(onSubmit)}>
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

      <div>hi</div>
    </div>
  );
};

export default VerifyProduct;
