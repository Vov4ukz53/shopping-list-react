import { List, Item, Content, Button } from "./styled.js";

const ProductsList = ({ products, hideDone, removeProduct, toggleDoneProduct }) => (
   <List>
      {products.map((product) => (
         <Item
            key={product.id}
            hidden={product.done && hideDone}
         >
            <Button
               toggleDone={product.done}
               onClick={() => toggleDoneProduct(product.id)}
            >
            </Button>
            <Content done={product.done}>
               {product.content}
            </Content>
            <Button
               remove
               onClick={() => removeProduct(product.id)}
            >
            </Button>
         </Item>
      ))}
   </List>
)

export default ProductsList;