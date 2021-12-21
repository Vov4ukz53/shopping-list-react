import Container from "../Container/index.js";
import Navigation from "./Navigation/index.js";
import { StyledHeader, Body, Logo } from "./styled.js";

const Header = ({ title }) => (
   <StyledHeader>
      <Container>
         <Body>
            <Logo to="/producty">{title}</Logo>
            <Navigation />
         </Body>
      </Container>
   </StyledHeader>
);

export default Header;