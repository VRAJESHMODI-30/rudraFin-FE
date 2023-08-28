// Products.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Products.css'; // Import the CSS file

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content"
    >
      <h1>Our Products</h1>
      <p>Explore our wide range of financial products.</p>
    </motion.div>
  );
};

export default Products;
