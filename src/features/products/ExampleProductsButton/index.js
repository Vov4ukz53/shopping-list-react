import { useDispatch, useSelector } from "react-redux";
import { Button } from "./../Button";
import { fetchExampleProducts, selectLoading } from "../productsSlice.js";

const ExampleProductsButton = () => {
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    return (
        <Button
            disabled={loading}
            onClick={() => dispatch(fetchExampleProducts())}
        >
            {loading ? "Ładowanie..." : "Pobierz przykladowe producty"}
            
        </Button>
    );
}

export default ExampleProductsButton;