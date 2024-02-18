import { TProducts } from "./ALLProducts";
import SingleProductCard from "./SingleProductCard";

const AllProductsCards = ({ products }: { products: TProducts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-5">
        {products?.map((product) => (
          <SingleProductCard product={product} key={product.uniqueId} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsCards;
