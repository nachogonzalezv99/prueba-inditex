import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header/Header";
import Error from "./pages/Error/Error";
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
          <Route path={PublicRoutes.ERROR} element={<Error />} />
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
