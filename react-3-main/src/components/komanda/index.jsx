import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/Mask group.png";
import img2 from "../../../public/assets/g1.png";
import img3 from "../../../public/assets/g2.png";
import img4 from "../../../public/assets/g4.png";
import img5 from "../../../public/assets/g5.png";

class Komanda extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="comanda">
            <h2>
              Наша <span>команда</span>
            </h2>
            <div className="comanda_item">
              <div className="card">
                <img src={img} alt="" />
                <p>
                  <b>Войнич Дарья</b>
                </p>
                <p>Заместитель директора по продажам</p>
                <p>+375 (17) 270-53-77 (317)</p>
              </div>

              <div className="card">
                <img src={img2} alt="" />
                <p>
                  <b> Мисько Екатерина</b>
                </p>
                <p>Начальник отдела сопровождения </p>
                <p> +375 (17) 270-53-77 (115)</p>
              </div>

              <div className="card">
                <img src={img3} alt="" />
                <p>
                  <b> Дмитроченко Дмитрий</b>
                </p>
                <p>Начальник отдела допечатной подготовки </p>
                <p> +375 (17) 270-53-77 (333)</p>
              </div>
              <div className="card">
                <img src={img4} alt="" />
                <p>
                  <b> Антух Евгений</b>
                </p>
                <p>Начальник отдела снабжения </p>
                <p>+375 (17) 270-53-77 (148)</p>
              </div>
              <div className="card">
                <img src={img5} alt="" />
                <p>
                  <b>Мисник Елена</b>
                </p>
                <p>Специалист по работе с клиентами </p>
                <p>+375 (17) 270-53-77 (322)</p>
              </div>
            </div>
            <button className="btn">Наша команда</button>
          </div>
        </div>
      </>
    );
  }
}

export default Komanda;
