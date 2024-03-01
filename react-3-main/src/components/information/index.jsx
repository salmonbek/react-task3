import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/Vector (2).png";
import img1 from "../../../public/assets/Vector (3).png";

class Information extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="information">
            <h2>
              Получить подробную <span>информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
            <div>
              <div className="input">
                <div className="in">
                  <img src={img} alt="" />
                  <input type="text" placeholder="Ваше имя" />
                </div>
                <div className="in1">
                  <img src={img1} alt="" />
                  <input type="text" placeholder="+375 (29) 0000000" />
                </div>
              </div>
              <textarea
                placeholder="Комментарий"
                cols="30"
                rows="10"
              ></textarea>
              <button>Получить информацию</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Information;
