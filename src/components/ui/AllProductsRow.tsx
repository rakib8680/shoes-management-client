import { TProduct } from "../../pages/ALLProducts";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import { FaPenRuler, FaRegTrashCan, FaSackDollar } from "react-icons/fa6";
import { useDeleteProductMutation } from "../../redux/features/products/productsApi";
import { toast } from "sonner";

const AllProductsRow = ({ product }: { product: TProduct }) => {
  const {
    photoUrl,
    name,
    price,
    brand,
    color,
    model,
    quantity,
    style,
    size,
    _id,
  } = product || {};

  const [deleteProduct, { data }] = useDeleteProductMutation();
  if (data?.success) {
    toast.success("Product deleted successfully", { duration: 2000 });
  }

  const classes = "p-4 border-b border-blue-gray-50";

  return (
    <tr key={photoUrl} className="text-center">
      <td className={classes}>
        <img src={photoUrl} className="w-16" />
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {name}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {price}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {brand}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {color}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {model}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {quantity}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {style}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {size.map((s) => s + ",")}
        </Typography>
      </td>
      <td className={`${classes}  space-x-2`}>
        {/* delete  */}
        <Tooltip content="Delete">
          <Button
            placeholder={""}
            onClick={() => deleteProduct(_id)}
            className="p-2 rounded-md bg-pink-200"
          >
            <FaRegTrashCan size={18} color="black" />
          </Button>
        </Tooltip>
        {/* edit  */}
        <Tooltip content="Edit">
          <Button placeholder={""} className="p-2 rounded-md bg-green-200">
            <FaPenRuler size={18} color="green" />
          </Button>
        </Tooltip>
        {/* sale  */}
        <Tooltip content="Sale">
          <Button placeholder={""} className="p-2 rounded-md bg-blue-200">
            <FaSackDollar size={18} color="blue" />
          </Button>
        </Tooltip>
      </td>
    </tr>
  );
};

export default AllProductsRow;
