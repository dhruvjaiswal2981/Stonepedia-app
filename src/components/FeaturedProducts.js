import React, { useState } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Granite',
      img: '/assets/granite.jpg',
      colors: [
        { name: 'White', img: '/assets/granite-white.jpg' },
        { name: 'Black', img: '/assets/granite-black.jpg' },
        { name: 'Gray', img: '/assets/granite-gray.jpg' },
      ],
      description: 'Premium Granite for your high-end countertops and flooring.',
      expert: 'Recommended by Experts',
    },
    {
      name: 'Marble',
      img: '/assets/marble.jpg',
      colors: [
        { name: 'White', img: '/assets/marble-white.jpg' },
        { name: 'Beige', img: '/assets/marble-beige.jpg' },
        { name: 'Black', img: '/assets/marble-black.jpg' },
      ],
      description: 'Luxury Marble for sophisticated and timeless interiors.',
      expert: 'Luxury Choice for Interiors',
    },
    {
      name: 'Quartz',
      img: '/assets/quartz.jpg',
      colors: [
        { name: 'White', img: '/assets/quartz-white.jpg' },
        { name: 'Gray', img: '/assets/quartz-gray.jpg' },
        { name: 'Beige', img: '/assets/quartz-beige.jpg' },
      ],
      description: 'Durable and stylish Quartz for any modern project.',
      expert: 'Best for Modern Projects',
    },
    {
      name: 'Limestone',
      img: '/assets/limestone.jpg',
      colors: [
        { name: 'White', img: '/assets/limestone-white.png' },
        { name: 'Gray', img: '/assets/limestone-gray.png' },
        { name: 'Beige', img: '/assets/limestone-beige.png' },
      ],
      description: 'Durable and stylish limestone for any modern project.',
      expert: 'Best for Modern Projects',
    },
    // Add 3 more products here with similar structure
  ];

  // Initialize state to track selected image for each product
  const [selectedImages, setSelectedImages] = useState(
    products.reduce((acc, product) => {
      acc[product.name] = product.img; // set default image for each product
      return acc;
    }, {})
  );

  const handleColorChange = (productName, colorImg) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [productName]: colorImg, // update the selected image for specific product
    }));
  };

  return (
    <section id="products" className="featured-products">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <div className="product-img-container">
                <img
                  src={selectedImages[product.name]} // use the selected image for each product
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="expert-label">{product.expert}</span>

                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="color-option"
                      onClick={() => handleColorChange(product.name, color.img)}
                      style={{ backgroundColor: color.name.toLowerCase() }}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>

                <a href="#" className="btn">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
