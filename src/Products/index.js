import "./style.css";

const Products = ({products, hideDoneProducts}) => (
   <ul className="shoppingList">
      {products.map((product) => (
         <li key={product.id} className={`shoppingList__item${product.done && hideDoneProducts
				   ? " shoppingList__item--hidden"
				   : ""}`}>
            <button className={`shoppingList__itemButton${product.done
				   ? " shoppingList__itemButton--done"
			   	: ""}`}>
			   </button>
			   <span className={`"shoppingList__itemContent${product.done
			   	? " shoppingList__itemContent--done"
			   	: ""}`}>
			      {product.content}
		   	</span>
			   <button className="shoppingList__itemButton shoppingList__itemButton--delete"></button>
         </li>
      ))}
   </ul>
)

export default Products;