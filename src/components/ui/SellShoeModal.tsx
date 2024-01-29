import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
} from "@material-tailwind/react";
import {  FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const SellShoeModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding...");

  };

  return (
    <>
      <Button
        variant="gradient"
        onClick={handleOpen}
        color="blue-gray"
        className="flex items-center gap-3 mb-3  ms-7 md:ms-0 px-3 py-2 md:px-6 md:py-3"
        placeholder={""}
      >
        Add Shoes
      </Button>

      <Dialog placeholder={""} open={open} handler={handleOpen} className="p-5">
        <DialogHeader placeholder={""}>Sale Shoes !</DialogHeader>
        <DialogBody placeholder={""}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 mb-10 ">
            {/* name  */}
            <Input
              className="w-full"
              crossOrigin={""}
              {...register("name", { required: true })}
              label="Name"
            />

            {/* price  */}
            <Input
              type="number"
              className="w-full"
              crossOrigin={""}
              {...register("price", { valueAsNumber: true, required: true })}
              label="Price"
            />

            <div className="flex justify-center">
              <Button
                placeholder={""}
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                placeholder={""}
                variant="gradient"
                type="submit"
                onClick={handleOpen}
              >
                Add
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default SellShoeModal;
