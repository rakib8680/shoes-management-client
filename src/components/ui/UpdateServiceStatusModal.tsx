import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  Option,
  Select,
  Tooltip,
} from "@material-tailwind/react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { useUpdateServiceStatusMutation } from "../../redux/features/Services/serviceApi";

export function UpdateServiceStatusModal({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit, reset, control } = useForm();
  const [updateStatus] = useUpdateServiceStatusMutation();

  //   submit polish request
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating...");
    const payload = {
      _id: id,
      data,
    };

    try {
      await updateStatus(payload);
      toast.success("Status Updated Successfully", {
        id: toastId,
        duration: 3000,
      });
      reset();
      setOpen(false);
    } catch (err) {
      toast.error("Failed to Update", { id: toastId, duration: 3000 });
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Tooltip content="Update Status">
        <button
          onClick={handleOpen}
          className="bg-blue-gray-500 px-2 text-xs font-semibold text-blue-gray-50 rounded-md"
        >
          Update
        </button>
      </Tooltip>

      <Dialog
        placeholder={""}
        open={open}
        handler={handleOpen}
        className="pb-7 pt-4 lg:p-10 space-y-5 bg-gradient-to-b from-blue-gray-100 rounded-md"
        size="xs"
      >
        <DialogHeader
          placeholder={""}
          className="text-lg ps-10 lg:ps-0 lg:text-2xl"
        >
          Update Service Status
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-10 lg:mx-0 space-y-10 "
        >
          {/* status  */}
          <div className="">
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value, ...field } }) => (
                <Select
                  {...field}
                  value={value}
                  onChange={(selectedValue) => onChange(selectedValue)}
                  placeholder={""}
                  label="Update Status"
                >
                  <Option value="pending">Pending</Option>
                  <Option value="ongoing">Ongoing</Option>
                  <Option value="completed">Completed</Option>
                </Select>
              )}
            />
          </div>

          {/* buttons */}
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
