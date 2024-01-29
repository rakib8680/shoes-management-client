import AddShoeModal from "../components/ui/AddShoeModal";
import AllProductsTable from "../components/ui/AllProductsTable";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";


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

      <AllProductsTable products={products} />

    </div>
  );
};

export default ALLProducts;
