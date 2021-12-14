import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function Author() {
   return (
      <>
         <Header
            title="Lista zakupów"
         />
         <Container>
            <Section
               title="Volodymyr Bronevych"
               body={
                  <p>
                     Czesc. 
                  </p>
               }
            />
         </Container>
      </>

   );
};

export default Author;

