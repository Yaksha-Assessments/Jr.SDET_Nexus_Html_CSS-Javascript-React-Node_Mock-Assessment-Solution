import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ title, price, image }) => {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    );
};

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductCard;
