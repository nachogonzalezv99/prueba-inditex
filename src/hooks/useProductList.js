import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRedux } from "../features/productsSlice";

export const useProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.poducts);
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        product.marca.match(new RegExp(search, "i")) ||
        product.modelo.match(new RegExp(search, "i"))
      ) {
        return product;
      }
    });
  }, [products, search]);

  useEffect(() => {
    dispatch(getProductsRedux());
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return { isLoading, filteredProducts, onSearchChange, search };
};
