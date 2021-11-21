import { useState } from "react";
import GlobalStyle from "./globalStyle";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Buttons from "./Section/Buttons";
import Form from "./Section/Form";
import Products from "./Section/Products";
import { useProducts } from "./useProducts";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
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
              <Products
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

export default App;
