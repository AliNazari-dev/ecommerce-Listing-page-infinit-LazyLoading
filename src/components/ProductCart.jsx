import React from "react";

const ProductsCart = () => {
  return (
    <div className='cartWrapper d-flex justify-content-between'>
      <img src='' alt='' />
      <div className='cartInfo'>
        <h3 className='title'></h3>
        <p className='desc'></p>
        <h3 className='price'></h3>
      </div>
      <button className='button'>Add to Cart</button>
    </div>
  );
};

export default ProductsCart;
