import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='shopping-part'>
                <h1>Shoping cart item length {products.length}</h1>
            </div>

            <div className='pricing-part'>
                <h1>Add your cart here</h1>
            </div>
            
        </div>
    );
};

export default Shop;