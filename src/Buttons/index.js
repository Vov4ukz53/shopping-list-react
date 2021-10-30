import "./style.css";

const Buttons = ({ products, hideDoneProducts }) => (

    <div className="section__buttons">
        {products.length > 0 && (
            <>
                <button
                    className="section__button">
                    {products.some(({ done }) => done) && hideDoneProducts
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
