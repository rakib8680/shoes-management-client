import AddShoeModal from "../components/ui/AddShoeModal";
import AllProductsRow from "../components/ui/AllProductsRow";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import {Card, Typography } from "@material-tailwind/react";

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

export type TProduct = {
  name: string;
  price: number;
  brand: string;
  color: string;
  model: string;
  quantity: number;
  style: string;
  size: number[];
  photoUrl?: string;
};

export type TProducts = TProduct[];

const ALLProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);
  const products: TProducts = data?.data;

  return (
    <div className="container mx-auto ">

      <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
        Total Products: {products?.length}
      </h1>

    <AddShoeModal/>

      <Card
        placeholder={""}
        className="h-full w-full overflow-x-scroll p-7 md:p-0"
      >
        <table className="w-full min-w-max table-auto text-left">
          
          {/* Table head  */}
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

          {/* table body  */}
          <tbody>
            {products?.map((product, index) => (
              <AllProductsRow product={product} key={index}></AllProductsRow>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ALLProducts;
