import { useState, useRef, useCallback } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCart from "../components/ProductCart";

const ProductsList = () => {
  const [page, setPage] = useState(1);

  const { products, error, fetchMore, loading } = useProducts(page);

  const observer = useRef();
  const lastProduct = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && fetchMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, fetchMore]
  );

  const handleFetch = (e) => {
    setPage(1);
  };

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
      <div id='gallery'>
        <div className='container '>
          <div className='row'>
            {products?.map((item, i) => {
              if (products.length === i + 1) {
                return (
                  <div className='col-lg-3 mb-4' ref={lastProduct} key={item.id++}>
                    <ProductCart item={item} />
                  </div>
                );
              } else {
                return (
                  <div className='col-lg-3 mb-4' key={item.id++}>
                    <ProductCart item={item} />;
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-content-center'>
        {loading && (
          <button className='btn btn-primary' type='button' disabled>
            <span
              className='spinner-border spinner-border-sm'
              role='status'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Loading...</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
