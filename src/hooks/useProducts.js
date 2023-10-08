import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [fetchMore, setFetchMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=6",
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
    return () => cancel();
  }, [page]);

  return { loading, error, products, fetchMore };
};

