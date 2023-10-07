import React from "react";

const ProductsList = () => {
  return (
    <div className='container'>
      <h1 className='title m-3'>Products</h1>
      <div className='filterContainer d-flex justify-content-between m-4 '>
        <div className='filter'>
          <span className='fs-5 fw-normal ms-3'>
            <select className='p-1 ms-3'>
              <option disabled>filter</option>
              <option>filter 1</option>
              <option>filter 1</option>
              <option>filter 1</option>
            </select>
          </span>
        </div>
        <div className='filter'>
          <span className='fs-5 fw-normal ms-3'>
            <select className='p-1 ms-3'>
              <option disabled>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </span>
        </div>
      </div>
      <div className='productCard'></div>
    </div>
  );
};

export default ProductsList;
