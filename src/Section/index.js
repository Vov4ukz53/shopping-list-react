import "./style.css";

const Section = ({ title, body, extraSectionTopContent }) => (
    <section className="section">
        <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraSectionTopContent}
        </div>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;