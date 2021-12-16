import Container from "../Container/index.js";
import Navigation from "./Navigation/index.js";
import { StyledHeader, Body, Link } from "./styled.js";

const Header = ({ title }) => (
   <StyledHeader>
      <Container>
         <Body>
            <Link to="/producty">{title}</Link>
            <Navigation />
         </Body>
      </Container>
   </StyledHeader>
);

export default Header;