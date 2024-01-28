import { useGetAllProductsQuery } from "../redux/features/products/productsApi";

const ALLProducts = () => {

  const {data} = useGetAllProductsQuery(undefined);

  console.log(data?.data);
  return (
     <div>
         <h1>This is ALLProducts component</h1>
     </div>
  )
};

export default ALLProducts;