import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchProvider } from "../contexts";
import { Error404 } from "../pages/404/Error404";
import { LoadingPage } from "../pages/loading";

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
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          </Route>
          <Route path="/items" exact>
            <Suspense fallback={<LoadingPage />}>
              <ResultsPage />
            </Suspense>
          </Route>

          <Route path="/items/:slugName">
            <Suspense fallback={<LoadingPage />}>
              <ProductPage />
            </Suspense>
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
};
