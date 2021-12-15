import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ProductsPage from "./features/products/ProductsPage";
import ProductPage from "./features/products/ProductPage";
import AuthorPage from "./features/author/AuthorPage";
import { Redirect } from "react-router-dom";

const App = () => (
   <HashRouter>
      <Switch>
         <Route path="/producty/:id">
            <ProductPage />
         </Route>
         <Route path="/producty">
            <ProductsPage />
         </Route>
         <Route path="/author">
            <AuthorPage />
         </Route>
         <Route path="/">
            <Redirect to="/producty" />
         </Route>
      </Switch>
   </HashRouter>
);

export default App;