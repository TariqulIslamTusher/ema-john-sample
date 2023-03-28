import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            <div className='product-part'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}>
                            
                        </Product>)
                }
            </div>

            <div className='pricing-part'>
                <h1>Add your cart here</h1>
            </div>
            
        </div>
    );
};

export default Shop;