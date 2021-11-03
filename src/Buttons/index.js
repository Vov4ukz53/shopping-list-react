import "./style.css";

const Buttons = ({ products, hideDone }) => (

    <div className="section__buttons">
        {products.length > 0 && (
            <>
                <button
                    className="section__button">
                    {products.some(({ done }) => done) && hideDone
                        ? "Pokaż" : "Ukryj"} zaznaczone
                </button>
                <button
                    className="section__button"
                    disabled={products.every(({ done }) => done)}
                >
                    Zaznacz wszystkie
                </button>
            </>
        )}
    </div >
);


export default Buttons;
