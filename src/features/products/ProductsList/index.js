import { useSelector, useDispatch } from "react-redux";
import {
   toggleDoneProduct,
   removeProduct,
   selectProducts,
   selectHideDone
} from "../productsSlice.js";
import { List, Item, Content, Button } from "./styled.js";

const ProductsList = () => {
   const products = useSelector(selectProducts);
   const hideDone = useSelector(selectHideDone);
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