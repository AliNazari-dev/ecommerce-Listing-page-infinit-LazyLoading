import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [fetchMore, setFetchMore] = useState(false);
  const [category, setCategory] = useState(null);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  console.log(category);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    if (category) {
      axios({
        method: "GET",
        url: `https://fakestoreapi.com/products/category/${category}?limit=6`,
        params: { page: page },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setProducts((prev) => {
            return [...new Set([...prev, ...res.data])];
          });
          setFetchMore(res.data.length > 0);
          setLoading(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        });
    } else {
      axios({
        method: "GET",
        url: `https://fakestoreapi.com/products?limit=20`,
        params: { page: page },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setProducts((prev) => {
            return [...new Set([...prev, ...res.data])];
          });
          setFetchMore(true);
          setLoading(false);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        });
    }
    return () => cancel();
  }, [page, category]);

  return { loading, error, products, fetchMore, handleChangeCategory };
};
