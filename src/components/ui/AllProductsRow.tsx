import { TProduct } from "../../pages/ALLProducts";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import {  FaRegTrashCan } from "react-icons/fa6";
import { useDeleteProductMutation } from "../../redux/features/products/productsApi";
import { toast } from "sonner";
import UpdateShoeModal from "./UpdateShoeModal";
import SellShoeModal from "./SellShoeModal";

const AllProductsRow = ({ product }: { product: TProduct }) => {
  const [deleteProduct, { data }] = useDeleteProductMutation();

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

  if (data?.success) {
    toast.success("Product deleted successfully", { duration: 2000 });
  }

  const classes = "p-4 border-b border-blue-gray-50";

  return (
    <tr key={photoUrl} className="text-center">
      {/* photo  */}
      <td className={classes}>
        <img src={photoUrl} className="w-16" />
      </td>

      {/* name  */}
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

      {/* price  */}
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          ${price}
        </Typography>
      </td>

      {/* brand  */}
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

      {/* color  */}
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

      {/* model  */}
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

      {/* quantity  */}
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

      {/* style  */}
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

      {/* size  */}
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
         <UpdateShoeModal product={product} />

        {/* sale  */}
        <SellShoeModal _id={_id}/>
      </td>
    </tr>
  );
};

export default AllProductsRow;
