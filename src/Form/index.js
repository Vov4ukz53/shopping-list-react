import "./style.css";

const Form = () => (
    <form className="form js-form">
        <input className="form__input" autoFocus required type="text" name="product"
            placeholder="Napisz artykuł!" />
        <button className="form__button">Dodaj do listy</button>
    </form>
)

export default Form;