import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
// import products from "../data/products";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await apiClient.get("/products");
        setProducts(response.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to Fetch Products. Retry Big Guy",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-normalbg text-gray-700 dark:bg-darkbg dark:text-darkmuted">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-normalbg dark:bg-darkbg">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <PageHeading title="Explore Smart Cart!">
        Add a touch of creativity to your space with our wide range of fun and
        unique products. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </main>
  );
}
