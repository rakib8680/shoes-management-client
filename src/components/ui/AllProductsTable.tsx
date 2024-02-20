import { Button, Card, Typography } from "@material-tailwind/react";
import AllProductsRow from "./AllProductsRow";
import { TProducts } from "../../pages/ALLProducts";
import { useState } from "react";
import { useDeleteMultipleProductsMutation } from "../../redux/features/products/productsApi";
import Swal from "sweetalert2";

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
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkDelete] = useDeleteMultipleProductsMutation();

  // BULK DELETE PRODUCTS
  const handleMultipleDelete = async () => {
    const payload = {
      selectedShoes: selectedIds,
    };
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
        const res = await bulkDelete(payload).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Products have been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <>
      {selectedIds.length > 0 && (
        <Button
          placeholder={""}
          className="!text-xs px-4 py-2 mb-3 rounded-full"
          color="blue-gray"
          variant="gradient"
          onClick={handleMultipleDelete}
        >
          Delete All
        </Button>
      )}
      <Card placeholder={""} className="h-full w-full overflow-x-auto">
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
              <AllProductsRow
                product={product}
                key={index}
                setSelectedIds={setSelectedIds}
              ></AllProductsRow>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default AllProductsTable;
