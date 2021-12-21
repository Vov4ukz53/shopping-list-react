import { useSelector, useDispatch } from "react-redux";
import {
   toggleDoneProduct,
   removeProduct,
   selectHideDone,
   selectProductsByQuery
} from "../../productsSlice";
import { List, Item, Content, Button, Link } from "./styled.js";
import { searchQueryParamsName } from "../searchQueryParamsName";
import { useQueryParameter } from "../queryParameters";

const ProductsList = () => {
   const query = useQueryParameter(searchQueryParamsName);
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