import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/products.services";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { postProductRedux } from "../features/shoppingCartSlice";

export const useProductDetail = (productId) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  const setInitialState = (array) => (array?.length === 1 ? array[0] : "");
  const isColorSelected = (color) => color === selectedColor;
  const isStorageSelected = (storage) => storage === selectedStorage;
  const handleColorClick = (color) => setSelectedColor(color);
  const handleStorageClick = (storage) => setSelectedStorage(storage);

  const isButtonDisabled = () => !selectedColor || !selectedStorage;
  const handleClick = () => {
    dispatch(postProductRedux(productId, selectedColor, selectedStorage));
  };

  useEffect(() => {
    getSingleProduct(productId).then((res) => setProduct(res.data));
  }, []);

  useEffect(() => {
    setSelectedColor(setInitialState(product.colores));
    setSelectedStorage(setInitialState(product.almacenamiento));
  }, [product]);

  return {
    product,
    isColorSelected,
    handleColorClick,
    isStorageSelected,
    handleStorageClick,
    isButtonDisabled,
    handleClick,
  };
};
