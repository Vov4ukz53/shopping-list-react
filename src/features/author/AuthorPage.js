import Container from "../../common/Container";
import { Paragraph, Wrapper, Strong, Div } from "./styled";
import Header from "../../common/Header";
import Section from "../../common/Section";


function AuthorPage() {
   return (
      <>
         <Header
            title="Lista zakupów"
         />
         <Container>
            <Section
               title="Vova Bronevych"
               body={
                  <Wrapper>
                     <Div>
                        <Paragraph>
                           <Strong>Witam serdecznie!</Strong> Mam 31 lat i pochodzę z Ukrainy, studiowałem we Lwowie.
                        </Paragraph>
                        <Paragraph>
                           Od 2014r mieszkam we Wrocławiu. Mam dwie córeczki, które mnie codziennie motywują i napełniają każdy dzień pozytywem!
                        </Paragraph>
                        <Paragraph>
                           Od roku uczę się frontendu i moim marzeniem jest <Strong>zostać front-end developerem.</Strong> Ponieważ chce robic na co dzień to co mi się podoba.
                        </Paragraph>
                     </Div>
                     <Div image />
                  </Wrapper>
               }
            />
         </Container>
      </>
   );
};

export default AuthorPage;

