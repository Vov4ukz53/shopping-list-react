import React from "react";
import { StyledNavigation, List, Item, Link } from "./styled";

function Navigation() {
   return (
      <StyledNavigation>
         <List>
            <Item>
               <Link to="/producty">Produkty</Link>
            </Item>
            <Item>
               <Link to="/autor">O autorze</Link>
            </Item>
         </List>
      </StyledNavigation>
   );
};

export default Navigation;