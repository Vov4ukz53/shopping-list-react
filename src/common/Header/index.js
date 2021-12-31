import Container from "../Container/index.js";
import Navigation from "./Navigation/index.js";
import { StyledHeader, Body, Logo } from "./styled.js";

const Header = ({ logo }) => (
   <StyledHeader>
      <Container>
         <Body>
            <Logo to="/producty">{logo}</Logo>
            <Navigation />
         </Body>
      </Container>
   </StyledHeader>
);

export default Header;