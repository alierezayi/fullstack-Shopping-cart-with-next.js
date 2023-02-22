import Product from "./Product";
import productItem from "../../data/products.json";

const ProductList = () => {
  return (
    <div>
      <div className="rounded-2xl border-2 border-slate-200 border-dashed py-14 px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          {productItem.map((pItem) => (
            <Product key={pItem.slug} item={pItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;