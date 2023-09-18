import "./section.scss";
const Section = () => {
  return (
    <div className="section">
      <div className="section_items">
        <div className="section_items-text">
          <h1 data-color1="Lorem ipsum " data-color2=" adipiscing">
            dolor sit <br />
            amet consectetur
          </h1>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
          <ul>
            <li>- Totam rem aperiam eaque ipsa</li>
            <li>- Sit voluptatem accusantium doloremque laudantium</li>
            <li>- Sed ut perspiciatis, unde omnis iste natus error</li>
          </ul>
        </div>
        <div className="section_items-buttons">
          <button>ЗАКАЗАТЬ</button>
          <button>ПОДРОБНЕЕ</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
