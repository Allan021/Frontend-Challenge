import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchProvider } from "../contexts";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ResultsPage = lazy(() => import("../pages/results/ResultsPage"));
const ProductPage = lazy(
  () => import("../pages/single-product/ProductDetails")
);
export const MainRoutes = () => {
  return (
    <Router>
      <SearchProvider>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route path="/items" exact>
            <Suspense fallback={<div>Loading...</div>}>
              <ResultsPage />
            </Suspense>
          </Route>

          <Route path="/items/:id">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductPage />
            </Suspense>
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
};
