import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Image",
  "Name",
  "Price",
  "Brand",
  "Color",
  "Model",
  "Quantity",
  "Style",
  "Size",
  "",
];

type TProduct = {
  name: string;
  price: number;
  brand: string;
  color: string;
  model: string;
  quantity: number;
  style: string;
  size: [number];
  photoUrl?: string;
};

type TProducts = TProduct[];

const ALLProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);
  const products: TProducts = data?.data;

  console.log(products);

  return (
    <div className="container mx-auto ">
      <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
        Total Products: {products?.length}
      </h1>
      <Card
        placeholder={""}
        className="h-full w-full overflow-scroll p-7 md:p-0"
      >
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index + 1}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 "
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map(
              ({
                photoUrl,
                name,
                price,
                brand,
                color,
                model,
                quantity,
                style,
                size,
              }) => {
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
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ALLProducts;
