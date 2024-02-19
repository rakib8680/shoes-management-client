import { Card, Typography } from "@material-tailwind/react";
import AllProductsRow from "./AllProductsRow";
import { TProducts } from "../../pages/ALLProducts";

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
  "Release Date",
  "Actions",
];

const AllProductsTable = ({ products }: { products: TProducts }) => {
  return (
    <Card
      placeholder={""}
      className="h-full w-full overflow-x-auto"
    >
      <table className="w-full min-w-max table-auto text-left ">
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
                  className="font-normal leading-none opacity-70 text-center"
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
  );
};

export default AllProductsTable;
