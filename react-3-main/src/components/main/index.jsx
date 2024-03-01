import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/social.png";
class Main extends Component {
  render() {
    return (
      <>
        <main></main>
        <div className="container">
          <img src={img} alt="" className="imgm" />
          <div className="main">
            <p>LEANGROUP - тубы и этикетки</p>
            <h2>Ламинатные тубы</h2>
            <p className="p">
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button>Каталог</button>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
