import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
// import products from "../data/products";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();

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

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products"); // Axios GET Request
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 },
    );
  }
}
