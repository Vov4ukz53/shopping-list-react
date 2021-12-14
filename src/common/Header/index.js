import Container from "../Container/index.js";
import Navigation from "./Navigation/index.js";
import { StyledHeader, Body, MainTitle } from "./styled.js";

const Header = ({ title }) => (
   <StyledHeader>
      <Container>
         <Body>
            <MainTitle>{title}</MainTitle>
            <Navigation />
         </Body>
      </Container>
   </StyledHeader>
);

export default Header;