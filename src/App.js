import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { ProductList } from "./pages/ProductList/ProductList";
import { PublicRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={PublicRoutes.PRODUCT_LIST} element={<ProductList />} />
        <Route path={PublicRoutes.PRODUCT_DETAILS} element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
