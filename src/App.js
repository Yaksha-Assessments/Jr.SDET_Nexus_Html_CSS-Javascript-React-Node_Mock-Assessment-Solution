import React from "react";
import useFetchProducts from "./hooks/useFetchProducts";
import ProductList from "./components/ProductList";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div>
      <h1>Product Inventory</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
