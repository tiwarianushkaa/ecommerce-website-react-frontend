import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {

  return (
    <div className="space-y-8">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold dark:text-white">
        Products
      </h1>

      {/* Product Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {products.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}