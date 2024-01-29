import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaSackDollar } from "react-icons/fa6";
import { useSellProductMutation } from "../../redux/features/products/productsApi";

const SellShoeModal = ({ _id }: { _id: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const { register, handleSubmit } = useForm();
  const [sellShoe] = useSellProductMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding...");

    const payload = {
      id: _id,
      saleInfo: data,
    };
    try {
      await sellShoe(payload).unwrap();
      toast.success("Shoe Sold Successfully", { id: toastId, duration: 2000 });
    } catch (err: any) {
      toast.error(err.data.errorMessage, { id: toastId, duration: 4000 });
    }
  };

  return (
    <>
      <Tooltip content="Sell">
        <Button
          placeholder={""}
          onClick={handleOpen}
          className="p-2 rounded-md bg-blue-200"
        >
          <FaSackDollar size={18} color="blue" />
        </Button>
      </Tooltip>

      <Dialog
        placeholder={""}
        size="xs"
        open={open}
        handler={handleOpen}
        className="p-5"
      >
        <DialogHeader placeholder={""}>Sale Shoes !</DialogHeader>
        <DialogBody placeholder={""}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7  ">
            {/* Quantity  */}
            <Input
              type="number"
              className="w-full"
              variant="standard"
              crossOrigin={""}
              {...register("quantity", { valueAsNumber: true, required: true })}
              label="Quantity"
            />

            {/* Buyer Name  */}
            <Input
              className="w-full"
              crossOrigin={""}
              variant="standard"
              {...register("buyerName", { required: true })}
              label="Buyer Name"
            />

            <div className="flex justify-center gap-10 pt-5">
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
                Sale
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default SellShoeModal;
