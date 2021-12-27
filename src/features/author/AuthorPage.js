import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { AuthorInfo } from "./AuthorInfo";

function AuthorPage() {
   return (
      <>
         <Header
            title="Lista zakupów"
         />
         <Container>
            <Section
               title="Vova Bronevych"
               body={<AuthorInfo />}
            />
         </Container>
      </>
   );
};

export default AuthorPage;

