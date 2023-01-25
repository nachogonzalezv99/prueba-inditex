import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header/Header";
import Error from "./pages/Error/Error";
import { PublicRoutes } from "./routes/routes";

const ProductList = lazy(() => import("./pages/ProductList/ProductList"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path={PublicRoutes.PRODUCT_LIST} element={<ProductList />} />
            <Route path={PublicRoutes.ERROR} element={<Error />} />
            <Route
              path={PublicRoutes.PRODUCT_DETAILS}
              element={<ProductDetails />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
