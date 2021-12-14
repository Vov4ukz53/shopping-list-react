import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./features/products/ProductsPage";
import Author from "./features/author/Author";
import { Redirect } from "react-router-dom";

const App = () => (
   <HashRouter>
      <Switch>
         <Route path="/producty">
            <Products />
         </Route>
         <Route path="/author">
            <Author />
         </Route>
         <Route path="/">
            <Redirect to="/producty" />
         </Route>
      </Switch>
   </HashRouter>
);

export default App;