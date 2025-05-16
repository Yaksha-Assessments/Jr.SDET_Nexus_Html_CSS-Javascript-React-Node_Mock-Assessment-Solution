import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductList;
