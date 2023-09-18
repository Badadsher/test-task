import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header_items">
        <div className="header_items-logo">
          <h1 data-color1="LOREMIPSUM" data-color2=".NET"></h1>
        </div>
        <div className="header_items-menu">
          <ul>
            <li>БИЗНЕС</li>
            <li>О НАС</li>
            <li>ЦЕНЫ</li>
            <li>ОФОРМИТЬ ЗАКАЗ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
