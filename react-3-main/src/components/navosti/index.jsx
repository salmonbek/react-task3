import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/img.png";
import img1 from "../../../public/assets/img (1).png";
import img2 from "../../../public/assets/Leangroup-media-pic-2048x2048_04a-январь 1.png";

class Navosti extends Component {
  render() {
    return (
      <>
        <section className="navoss">
          <div className="container">
            <h2>Новости</h2>
            <div className="navos">
              <div className="card">
                <img src={img} alt="" />
                <p className="ti">28.01.2022</p>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="card">
                <img src={img1} alt="" />
                <p className="ti">21.01.2022</p>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="card">
                <img src={img2} alt="" />
                <p className="ti">28.01.2022</p>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
            </div>
            <button className="btn">Все новости</button>
          </div>
        </section>
      </>
    );
  }
}

export default Navosti;
