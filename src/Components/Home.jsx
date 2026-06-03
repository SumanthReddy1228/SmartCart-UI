import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import products from "../data/products";
export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore Smart Cart!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
