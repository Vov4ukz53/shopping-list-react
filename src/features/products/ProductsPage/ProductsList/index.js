import { useSelector, useDispatch } from "react-redux";
import {
   toggleDoneProduct,
   removeProduct,
   selectHideDone,
   selectProductsByQuery
} from "../../productsSlice";
import { List, Item, Content, Button, Link } from "./styled.js";
import { useLocation } from "react-router-dom";

const ProductsList = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const query = searchParams.get("szukaj");

   const products = useSelector(state => selectProductsByQuery(state, query));
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
                  <Link to={`/producty/${product.id}`}>
                     {product.content}
                  </Link>
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