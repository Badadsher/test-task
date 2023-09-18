import "./info.scss";
import {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Dotsm,
  Activedt,
} from "../export";
const Info = () => {
  return (
    <div className="info">
      <div className="info_items">
        <div className="info_items-text">
          <h1 data-color1="ОФОРМЛЕНИЕ " data-color2=" ЗАКАЗА"></h1>
          <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
        </div>
        <div className="info_items-elipses">
          <div className="info_items-elipses_first set">
            <img src={First}></img>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <img src={Dotsm}></img>
          <img src={Activedt}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>

          <div className="info_items-elipses_second set">
            <img src={Second}></img>
            <p>Сonsecteturadipiscing elit</p>
          </div>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>

          <div className="info_items-elipses_third set">
            <img src={Third}></img>
            <p>Sed do eiusmod tempor</p>
          </div>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>

          <div className="info_items-elipses_fourth set">
            <img src={Fourth}></img>
            <p>Esse cillum dolore eu fugiat</p>
          </div>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>
          <img src={Dotsm}></img>

          <div className="info_items-elipses_fifth set">
            <img src={Fifth}></img>
            <p>Excepteur sint occaecat cupidatat non proident</p>
          </div>
        </div>

        <div className="info_items-interface">
          <div className="info_items-interface_selectorsinput">
            <select></select>
            <select></select>
            <input placeholder="Ваше имя"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
