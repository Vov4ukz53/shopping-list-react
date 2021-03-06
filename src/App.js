import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./common/Header";
import ProductsPage from "./features/products/ProductsPage";
import ProductPage from "./features/products/ProductPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
   <HashRouter>
      <Header
         logo="Lista zakupów"
      />
      <Switch>
         <Route path="/producty/:id">
            <ProductPage />
         </Route>
         <Route path="/producty">
            <ProductsPage />
         </Route>
         <Route path="/autor">
            <AuthorPage />
         </Route>
         <Route path="/">
            <Redirect to="/producty" />
         </Route>
      </Switch>
   </HashRouter>
);

export default App;