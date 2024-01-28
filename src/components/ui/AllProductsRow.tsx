import { TProduct } from "../../pages/ALLProducts";
import { Typography } from "@material-tailwind/react";

const AllProductsRow = ({ product }: { product: TProduct }) => {
  const { photoUrl, name, price, brand, color, model, quantity, style, size } =
    product || {};
  const classes = "p-4 border-b border-blue-gray-50";

  return (
    <tr key={photoUrl}>
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
      <td className={classes}>
        <Typography
          as="a"
          placeholder={""}
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          Edit
        </Typography>
      </td>
    </tr>
  );
};

export default AllProductsRow;
