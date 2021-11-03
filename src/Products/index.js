import "./style.css";

const Products = ({ products, hideDone, removeProduct, toggleDoneProduct, setAllDone }) => (
   <ul className="shoppingList">
      {products.map((product) => (
         <li key={product.id}
            className={`shoppingList__item${product.done && hideDone
               ? " shoppingList__item--hidden"
               : ""}`}>
            <button
               className={`shoppingList__itemButton${product.done
                  ? " shoppingList__itemButton--done"
                  : ""}`}
               onClick={() => toggleDoneProduct(product.id)}
            >
            </button>
            <span
               className={`"shoppingList__itemContent${product.done
                  ? " shoppingList__itemContent--done"
                  : ""}`}>
               {product.content}
            </span>
            <button
               className="shoppingList__itemButton shoppingList__itemButton--delete"
               onClick={() => removeProduct(product.id)}
            >
            </button>
         </li>
      ))}
   </ul>
)

export default Products;