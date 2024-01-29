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
  const [style, setStyle] = useState("");
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const { data } = useGetAllProductsQuery({
    brand: brand,
    color: color,
    model: model,
    style: style,
    sort: sort,
    size: size,
  });
  const products: TProducts = data?.data;

  return (
    <div className="">
      <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
        Total Products: {products?.length}
      </h1>
      <AddShoeModal />

      <div className="flex flex-col  md:justify-between items-end md:items-start md:ms-[300px] flex-wrap me-10 md:me-0 mb-5 md:mb-0">
        <h1 className="text-blue-gray-400 font-medium text-md md:py-3">Filter By: </h1>
        <div className="flex  flex-wrap md:flex-nowrap w-2/5 md:w-auto md:pb-5">
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

          {/* filter by style  */}
          <Select
            placeholder={""}
            label="Style"
            className=""
            onChange={(value: string | undefined) =>
              value ? setStyle(value) : setStyle("")
            }
          >
            <Option value="">All</Option>
            <Option value="Running">Running</Option>
            <Option value="Athletic">Athletic</Option>
            <Option value="Basketball">Basketball</Option>
            <Option value="Casual">Casual</Option>
            <Option value="Fashion">Fashion</Option>
          </Select>

          {/* filter by size  */}
          <Select
            placeholder={""}
            label="Size"
            className=""
            onChange={(value: string | undefined) =>
              value ? setSize(value) : setSize("")
            }
          >
            <Option value="">All</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
          </Select>

          {/* sort by release date  */}
          <Select
            placeholder={""}
            label="Release Date"
            className=""
            onChange={(value: string | undefined) =>
              value ? setSort(value) : setSort("")
            }
          >
            <Option value="Latest">Latest</Option>
            <Option value="">Earliest</Option>
          </Select>



        </div>
      
      </div>

    <div className="container mx-auto">
    <AllProductsTable products={products} />
    </div>
    </div>
  );
};

export default ALLProducts;
