import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import ShoeSizesSelect from "./ShoeSizesSelect";
import { useAddProductMutation } from "../../redux/features/products/productsApi";
import { toast } from "sonner";

const AddShoeModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const { register, handleSubmit, control } = useForm();
  const [addProduct] = useAddProductMutation();



  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding...");
    try {
      await addProduct(data);
      toast.success("Shoe added successfully", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="md:ms-[300px] relative md:static top-40">
      <Button
        variant="gradient"
        onClick={handleOpen}
        color="blue-gray"
        className="flex items-center gap-3 mb-3  ms-7 md:ms-0 px-6 py-3 md:px-6 md:py-3"
        placeholder={""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Add Shoes
      </Button>

      <Dialog placeholder={""} open={open} handler={handleOpen} className="p-5">
        <DialogHeader placeholder={""}>Add a new pair of shoes !</DialogHeader>
        <DialogBody placeholder={""}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-7 mb-10 ">
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

              {/* quantity  */}
              <Input
                type="number"
                className="w-full"
                crossOrigin={""}
                {...register("quantity", {
                  valueAsNumber: true,
                  required: true,
                })}
                label="Quantity"
              />

              {/* photo  */}
              <Input
                className="w-full"
                crossOrigin={""}
                {...register("photoUrl")}
                label="Image URL"
              />

              <div className="flex justify-between">
                {/* brand   */}
                <div className="w-72">
                  <Controller
                    name="brand"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Select
                        {...field}
                        value={value}
                        onChange={(selectedValue) => onChange(selectedValue)}
                        placeholder={""}
                        label="Select Brand"
                      >
                        <Option value="Nike">Nike</Option>
                        <Option value="Adidas">Adidas</Option>
                        <Option value="Puma">Puma</Option>
                        <Option value="Gucci">Gucci</Option>
                        <Option value="Bata">Bata</Option>
                      </Select>
                    )}
                  />
                </div>

                {/* model   */}
                <div className="w-72">
                  <Controller
                    name="model"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Select
                        {...field}
                        value={value}
                        onChange={(selectedValue) => onChange(selectedValue)}
                        placeholder={""}
                        label="Select Model"
                      >
                        <Option value="Air Max 90">Air Max 90</Option>
                        <Option value="Air Jordan 2">Air Jordan 2</Option>
                        <Option value="Ultra Boost">Ultra Boost</Option>
                        <Option value="NMD R1">NMD R1</Option>
                        <Option value="Ace Leather">Ace Leather</Option>
                        <Option value="Rhyton Leather">Rhyton Leather</Option>
                        <Option value="Comfit Oxford">Comfit Oxford</Option>
                        <Option value="Comfit Oxford 2">Comfit Oxford 2</Option>
                        <Option value="Ultra Boost 3">Ultra Boost 3</Option>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                {/* style  */}
                <div className="w-72">
                  <Controller
                    name="style"
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Select
                        {...field}
                        value={value}
                        onChange={(selectedValue) => onChange(selectedValue)}
                        placeholder={""}
                        label="Select Style"
                      >
                        <Option value="Running">Running</Option>
                        <Option value="Athletic">Athletic</Option>
                        <Option value="Basketball">Basketball</Option>
                        <Option value="Casual">Casual</Option>
                        <Option value="Fashion">Fashion</Option>
                      </Select>
                    )}
                  />
                </div>

                {/* color  */}
                <div className="w-72">
                  <Controller
                    name="color"
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Select
                        {...field}
                        value={value}
                        onChange={(selectedValue) => onChange(selectedValue)}
                        placeholder={""}
                        label="Select Color"
                      >
                        <Option value="White">White</Option>
                        <Option value="Black">Black</Option>
                        <Option value="Blue">Blue</Option>
                        <Option value="Pink">Pink</Option>
                        <Option value="Red">Red</Option>
                      </Select>
                    )}
                  />
                </div>
              </div>

              {/* size  */}
              <div className="w-full">
                <ShoeSizesSelect control={control} size={''} />
              </div>


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
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default AddShoeModal;
