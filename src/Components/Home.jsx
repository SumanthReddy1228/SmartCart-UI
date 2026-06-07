import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import products from "../data/products";
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Smart Cart!">
        Add a touch of creativity to your space with our wide range of fun and
        unique products. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
