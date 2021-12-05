import { useSelector, useDispatch } from "react-redux";
import { selectProducts, toggleDoneProduct, removeProduct } from "../productsSlice.js";
import { List, Item, Content, Button } from "./styled.js";

const ProductsList = () => {
   const { products, hideDone } = useSelector(selectProducts);
   const dispatch = useDispatch();

   return (
      <List>
         {products.map((product) => (
            <Item
               key={product.id}
               hidden={product.done && hideDone}
            >
               <Button
                  toggleDone={product.done}
                  onClick={() => dispatch(toggleDoneProduct(product.id))}
               >
               </Button>
               <Content done={product.done}>
                  {product.content}
               </Content>
               <Button
                  remove
                  onClick={() => dispatch(removeProduct(product.id))}
               >
               </Button>
            </Item>
         ))}
      </List>
   );
};

export default ProductsList;