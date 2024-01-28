// ShoeSizesSelect.jsx

import { Controller } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "6", label: "Size 6" },
  { value: "7", label: "Size 7" },
  { value: "8", label: "Size 8" },
  { value: "9", label: "Size 9" },
  { value: "10", label: "Size 10" },
];

const ShoeSizesSelect = ({ control }: { control: any }) => {
  return (
    <>
      <Controller
        name="size"
        rules={{ required: true }}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Select
            {...field}
            isMulti
            value={
              value
                ? options.filter((option) =>
                    value.includes(parseInt(option.value, 10))
                  )
                : []
            }
            onChange={(selectedValues) => {
              const selectedSizeValues = selectedValues
                ? selectedValues.map((option) => parseInt(option.value, 10))
                : [];
              onChange(selectedSizeValues);
            }}
            placeholder="Select Sizes"
            options={options}
          />
        )}
      />
    </>
  );
};

export default ShoeSizesSelect;
