import { TProduct } from "../../pages/ALLProducts";
import {
  Button,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/products/productsApi";
import UpdateShoeModal from "./UpdateShoeModal";
import SellShoeModal from "./SellShoeModal";
import Swal from "sweetalert2";
import { BsFillShieldSlashFill } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";

type TProductsRowProps = {
  product: TProduct;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const AllProductsRow = ({ product, setSelectedIds }: TProductsRowProps) => {
  const [deleteProduct] = useDeleteProductMutation();
  const [authenticateProduct] = useUpdateProductMutation();
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
    isAuthentic,
    createdAt,
  } = product || {};

  // delete product
  const handleDelete = async (_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#880E4F",
      cancelButtonColor: "#48565E",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProduct(_id).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  // Make Array of _id to delete
  const storeIds = (_id: string) => {
    setSelectedIds((prevIds) => {
      if (prevIds.includes(_id)) {
        return prevIds.filter((id) => id !== _id);
      } else {
        return [...prevIds, _id];
      }
    });
  };

  // authenticate product
  const handleAuthenticate = async (_id: string) => {
    const payload = {
      id: _id,
      updateInfo: {
        isAuthentic: !isAuthentic,
      },
    };

    Swal.fire({
      title: `${isAuthentic ? "Deauthenticate" : "Authenticate"} this product?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#880E4F",
      cancelButtonColor: "#48565E",
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await authenticateProduct(payload).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Update has been made.",
            icon: "success",
          });
        }
      }
    });
  };

  const classes = "p-4 border-b border-blue-gray-50";

  return (
    <tr key={photoUrl} className="text-center ">
      {/* photo  */}
      <td className="p-4 border-b border-blue-gray-50 flex">
        <Checkbox
          crossOrigin={""}
          className="!size-4"
          onClick={() => storeIds(_id)}
        />
        <img src={photoUrl} className="w-20" />
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
          {size.join(", ")}
        </Typography>
      </td>

      {/* Release Date  */}
      <td className={classes}>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          {createdAt?.split("T")[0]}
        </Typography>
      </td>

      <td className={`${classes}  space-x-2`}>
        {/* delete  */}
        <Tooltip content="Delete">
          <Button
            placeholder={""}
            onClick={() => handleDelete(_id)}
            className="p-2 rounded-md bg-pink-200"
          >
            <FaRegTrashCan size={18} color="black" />
          </Button>
        </Tooltip>

        {/* edit  */}
        <UpdateShoeModal product={product} />

        {/* sale  */}
        <SellShoeModal _id={_id} />

        {/* Authenticate  */}
        <Tooltip content={`${isAuthentic ? "Authentic" : "Not Authentic"}`}>
          <Button
            placeholder={""}
            onClick={() => handleAuthenticate(_id)}
            className={`${
              isAuthentic
                ? "bg-amber-200 text-amber-900"
                : "bg-gray-200 text-gray-500"
            } p-2 rounded-md  `}
          >
            {isAuthentic ? (
              <IoShieldCheckmark size={20} />
            ) : (
              <BsFillShieldSlashFill size={18} />
            )}
          </Button>
        </Tooltip>
      </td>
    </tr>
  );
};

export default AllProductsRow;
