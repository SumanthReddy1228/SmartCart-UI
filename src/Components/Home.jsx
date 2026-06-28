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
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products");
      setProducts(response.data);
    } catch (error) {
      error.response?.data?.message ||
        "Failed to Fetch Products. Retry Big Guy";
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }

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
