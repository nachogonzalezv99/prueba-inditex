import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header/Header";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { ProductList } from "./pages/ProductList/ProductList";
import { PublicRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary> 
        <Routes>
          <Route path={PublicRoutes.PRODUCT_LIST} element={<ProductList />} />
          <Route
            path={PublicRoutes.PRODUCT_DETAILS}
            element={<ProductDetails />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
