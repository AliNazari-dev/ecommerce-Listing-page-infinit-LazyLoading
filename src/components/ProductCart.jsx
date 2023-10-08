import React from "react";

const ProductsCart = ({ item }) => {
  return (
    <div class='col-lg-3 mb-4'>
      <div class='card'>
        <div className='d-flex justify-content-center pt-5'>
          <img
            src={item?.image}
            alt=''
            className='card-img-top'
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div class='card-body'>
          <h5 class='card-title'>{item?.title.slice(0, 10)}</h5>
          <p class='card-text'>{item?.description.slice(0, 90)} ....</p>
          <a href='' class='btn btn-outline-success btn-sm w-100'>
            Add more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
