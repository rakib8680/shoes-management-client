import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option,
  Tooltip,
} from "@material-tailwind/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import ShoeSizesSelect from "./ShoeSizesSelect";
import { FaPenRuler } from "react-icons/fa6";
import { TProduct } from "../../pages/ALLProducts";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/products/productsApi";
import { toast } from "sonner";

const UpdateShoeModal = ({ product }: { product: TProduct }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const { register, handleSubmit, control } = useForm();
  const [updateProduct] = useUpdateProductMutation();
  const [makeDuplicate] = useAddProductMutation();

  const {
    name,
    price,
    brand,
    color,
    model,
    quantity,
    style,
    size,
    _id,
    photoUrl,
  } = product || {};

  const onSubmit = async (newData: FieldValues) => {
    const toastId = toast.loading("Updating...");
    const payload = {
      id: _id,
      updateInfo: newData,
    };

    try {
      await updateProduct(payload);
      toast.success("Shoe updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  // handle create duplicate shoe
  const handleDuplicate = async (product: TProduct) => {
    const newProduct = {
      ...product,
      _id: undefined,
    };

    const toastId = toast.loading("Duplicating...");
    try {
      await makeDuplicate(newProduct);
      toast.success("Shoe duplicated successfully", {
        id: toastId,
        duration: 2000,
      });
      handleOpen();
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <Tooltip content="Update or Duplicate">
        <Button
          placeholder={""}
          onClick={handleOpen}
          className="p-2 rounded-md bg-green-200"
        >
          <FaPenRuler size={18} color="green" />
        </Button>
      </Tooltip>

      <Dialog placeholder={""} open={open} handler={handleOpen} className="p-5">
        <DialogHeader placeholder={""}>Update {name} !</DialogHeader>
        <DialogBody placeholder={""}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-7 mb-3 md:mt-10">
              {/* name  */}
              <Input
                className="w-full"
                defaultValue={name}
                crossOrigin={""}
                {...register("name", { required: true })}
                label="Name"
              />

              {/* price  */}
              <Input
                type="number"
                defaultValue={price}
                className="w-full"
                crossOrigin={""}
                {...register("price", { valueAsNumber: true, required: true })}
                label="Price"
              />

              {/* quantity  */}
              <Input
                type="number"
                defaultValue={quantity}
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
                defaultValue={photoUrl}
                crossOrigin={""}
                {...register("photoUrl")}
                label="Image URL"
              />

              <div className="flex justify-between">
                {/* brand   */}
                <div className="w-72">
                  <Controller
                    name="brand"
                    defaultValue={brand}
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
                    defaultValue={model}
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
                    defaultValue={style}
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
                    defaultValue={color}
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
                <ShoeSizesSelect control={control} size={size} />
              </div>

              <div className="flex justify-end md:justify-center gap-10">
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
                  Update
                </Button>
              </div>
            </div>
          </form>
          <Button
            placeholder={""}
            variant="outlined"
            size="sm"
            className="relative bottom-12"
            onClick={() => handleDuplicate(product)}
          >
            Duplicate
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UpdateShoeModal;
