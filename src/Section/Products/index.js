import "./style.css";

const Products = ({ products, hideDone, removeProduct, toggleDoneProduct }) => (
   <ul className="products">
      {products.map((product) => (
         <li key={product.id}
            className={`products__item${product.done && hideDone
               ? " products__item--hidden"
               : ""}`}>
            <button
               className={`products__itemButton${product.done
                  ? " products__itemButton--done"
                  : ""}`}
               onClick={() => toggleDoneProduct(product.id)}
            >
            </button>
            <span
               className={`"products__itemContent${product.done
                  ? " products__itemContent--done"
                  : ""}`}>
               {product.content}
            </span>
            <button
               className="products__itemButton products__itemButton--delete"
               onClick={() => removeProduct(product.id)}
            >
            </button>
         </li>
      ))}
   </ul>
)

export default Products;