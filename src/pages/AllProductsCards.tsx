import { TProducts } from "./ALLProducts";
import SingleProductCard from "./SingleProductCard";

const AllProductsCards = ({ products }: { products: TProducts }) => {
  return (
    <div>
      <h1>This is AllProductsCards component</h1>
      <div className="grid grid-cols-4 p-5 gap-5">
        {products?.map((product) => (
          <SingleProductCard product={product} key={product.uniqueId} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsCards;
