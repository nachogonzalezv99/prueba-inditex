import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/products.services";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { postShoppingCartRedux } from "../features/shoppingCartSlice";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";

export const useProductDetail = (productId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(postShoppingCartRedux(productId, selectedColor, selectedStorage));
  };

  useEffect(() => {
    getSingleProduct(productId)
      .then((res) => setProduct(res.data))
      .catch(() => {
        navigate(PublicRoutes.ERROR);
      });
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
