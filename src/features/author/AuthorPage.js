import Container from "../../common/Container";
import Section from "../../common/Section";
import { AuthorInfo } from "./AuthorInfo";

function AuthorPage() {
   return (
      <>
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

