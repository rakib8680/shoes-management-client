import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRequestPolishMutation } from "../../redux/features/Services/serviceApi";
import { toast } from "sonner";
import { IoCloudUploadOutline } from "react-icons/io5";

export function RequestPolish() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, control } = useForm();
  const [requestPolish] = useRequestPolishMutation();

  //   submit polish request
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Submitting...");

    try {
      await requestPolish(data).unwrap();
      toast.success("Submitted Successfully", { id: toastId, duration: 3000 });
      reset();
      setOpen(false);
    } catch (err) {
      toast.error("Failed to submit", { id: toastId, duration: 3000 });
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        placeholder={""}
        variant="outlined"
        className="square-btn flex gap-2 items-center"
        onClick={handleOpen}
      >
        Request Service
        <IoCloudUploadOutline size={20} />
      </Button>
      <Dialog
        placeholder={""}
        open={open}
        handler={handleOpen}
        className="p-10 space-y-10 bg-gradient-to-b from-blue-gray-100 rounded-md"
        size="sm"
      >
        <DialogHeader placeholder={""}>Make A Polishing Request !</DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className=" mx-10 space-y-7 ">
          {/* name  */}
          <Input
            crossOrigin={""}
            variant="standard"
            label="Product Name"
            placeholder="Enter Product Name"
            {...register("productName", { required: true })}
          />
          {/* type  */}
          <div className="">
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value, ...field } }) => (
                <Select
                  {...field}
                  value={value}
                  onChange={(selectedValue) => onChange(selectedValue)}
                  placeholder={""}
                  label="Polishing Type"
                >
                  <Option value="All Sides">All Sides</Option>
                  <Option value="Front">Front</Option>
                  <Option value="Back">Back</Option>
                  <Option value="Bottom">Bottom</Option>
                  <Option value="Top">Top</Option>
                </Select>
              )}
            />
          </div>
          {/* level  */}
          <div className="">
            <Controller
              name="level"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value, ...field } }) => (
                <Select
                  {...field}
                  value={value}
                  onChange={(selectedValue) => onChange(selectedValue)}
                  placeholder={""}
                  label="Shining Level"
                >
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="High">High</Option>
                  <Option value="No Shine">No Shine</Option>
                </Select>
              )}
            />
          </div>

          {/* instructions */}
          <Textarea label="Instructions" {...register("instructions")} />

          <div className=" flex justify-around">
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
              color="blue-gray"
              type="submit"
              className="rounded-md"
            >
              <span>Confirm</span>
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
