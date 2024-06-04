/* eslint-disable react/prop-types */
import React from 'react';

const Products = ({product}) => {
   return (
      <div>
         <h3>{product.title}</h3>
         <img src={product.image} alt="" />
      </div>
   );
}

export default Products;
