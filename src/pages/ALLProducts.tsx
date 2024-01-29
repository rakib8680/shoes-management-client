import { Option, Select } from "@material-tailwind/react";
import AddShoeModal from "../components/ui/AddShoeModal";
import AllProductsTable from "../components/ui/AllProductsTable";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import { useState } from "react";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  color: string;
  model: string;
  quantity: number;
  style: string;
  size: number[];
  photoUrl?: string;
  createdAt?: string;
};
export type TProducts = TProduct[];

const ALLProducts = () => {
  // filtering  states
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");

  const { data } = useGetAllProductsQuery({
    brand: brand,
    color: color,
    model: model,
  });
  const products: TProducts = data?.data;

  return (
    <div className="container mx-auto ">
      <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
        Total Products: {products?.length}
      </h1>
      <AddShoeModal />

      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-blue-gray-400 font-medium text-md">Filter By: </h1>
        <div className="flex">
          {/* filter by brand  */}
          <Select
            placeholder={""}
            label="Brand"
            className=""
            onChange={(value: string | undefined) =>
              value ? setBrand(value) : setBrand("")
            }
          >
            <Option value="">All</Option>
            <Option value="Nike">Nike</Option>
            <Option value="Adidas">Adidas</Option>
            <Option value="Puma">Puma</Option>
            <Option value="Gucci">Gucci</Option>
            <Option value="Bata">Bata</Option>
          </Select>

          {/* filter by color  */}
          <Select
            placeholder={""}
            label="Color"
            className=""
            onChange={(value: string | undefined) =>
              value ? setColor(value) : setColor("")
            }
          >
            <Option value="">All</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Pink">Pink</Option>
            <Option value="Red">Red</Option>
          </Select>

          {/* filter by Model  */}
          <Select
            placeholder={""}
            label="Model"
            className=""
            onChange={(value: string | undefined) =>
              value ? setModel(value) : setModel("")
            }
          >
            <Option value="">All</Option>
            <Option value="Air Max 90">Air Max 90</Option>
            <Option value="Air Jordan 2">Air Jordan 2</Option>
            <Option value="Ultra Boost">Ultra Boost</Option>
            <Option value="NMD R1">NMD R1</Option>
            <Option value="Ace Leather">Ace Leather</Option>
            <Option value="Rhyton Leather">Rhyton Leather</Option>
            <Option value="Comfit Oxford">Comfit Oxford</Option>
            <Option value="Comfit Oxford 2">Comfit Oxford 2</Option>
            <Option value="Ultra Boost 3">Ultra Boost 3</Option>
          </Select>
        </div>
      </div>

      <AllProductsTable products={products} />
    </div>
  );
};

export default ALLProducts;
