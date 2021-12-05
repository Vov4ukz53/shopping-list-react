import { useState } from "react";
import GlobalStyle from "../../globalStyle";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import Form from "./Form";
import ProductsList from "./ProductsList";
import { useProducts } from "../../useProducts";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

function Products() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    products,
    addNewProduct,
    removeProduct,
    toggleDoneProduct,
    setAllDone
  } = useProducts();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header
            title="Lista zakupów"
          />

          <Section
            title="Dodaj nowy artykuł"
            body={
              <Form
                addNewProduct={addNewProduct}
              />
            }
          />

          <Section
            title="Lista zakupów"
            body={
              <ProductsList
                products={products}
                hideDone={hideDone}
                removeProduct={removeProduct}
                toggleDoneProduct={toggleDoneProduct}
              />
            }
            extraHeaderContent={
              <Buttons
                products={products}
                hideDone={hideDone}
                toggleHideDone={toggleHideDone}
                removeProduct={removeProduct}
                setAllDone={setAllDone}
              />
            }
          />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Products;
