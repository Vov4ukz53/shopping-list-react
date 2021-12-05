import { Wrapper, Header, HeaderTitle } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
   <Wrapper>
      <Header>
         <HeaderTitle>{title}</HeaderTitle>
         {extraHeaderContent}
      </Header>
      {body}
   </Wrapper>
);

export default Section;