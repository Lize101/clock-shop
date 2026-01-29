import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { products } from '../productData';

function ProductDetail() {
  // Get the product ID from the URL
  const { id } = useParams();
  
  // Find the product that matches this ID
  const product = products.find(p => p.id === parseInt(id));

  // If product doesn't exist, show error
  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">← Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">← Back to shop</Link>
      
      <div className="product-detail">
        <div className="product-image-large">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-details">
          <span className="category-badge">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price-large">£{product.price.toFixed(2)}</p>
          <p className="description-detailed">{product.description}</p>
          
          <div className="product-features">
            <h3>Features:</h3>
            <ul>
              <li>High-quality craftsmanship</li>
              <li>1-year warranty included</li>
              <li>Free shipping on orders over $50</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </div>
          
          <button className="add-to-cart-btn-large">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;