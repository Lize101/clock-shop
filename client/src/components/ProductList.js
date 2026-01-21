import React from 'react';
import './ProductList.css';
import { products } from '../productData';

function ProductList () {
    return (
        <div className="product-list-container">
            <h2>Our Collection</h2>
            <div className="product-grid">
                {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    <p className="description">{product.description}</p>
                    <p className="price">£{product.price.toFixed(2)}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;