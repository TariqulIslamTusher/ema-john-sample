import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-top-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <div className='product-bottom-info'>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>

            <button className='button-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;