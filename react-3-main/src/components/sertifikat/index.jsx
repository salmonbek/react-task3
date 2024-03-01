import "./index.scss";
import img from "../../../public/assets/Vector.png";
import img1 from "../../../public/assets/Vector (1).png";
import img2 from "../../../public/assets/1.png";
import img3 from "../../../public/assets/2.png";
import img4 from "../../../public/assets/3.png";
import img5 from "../../../public/assets/4.png";
import img6 from "../../../public/assets/5.png";

import { Component } from "react";

class Sertifikat extends Component {
  render() {
    return (
      <>
        <section className="sertifikat">
          <img src={img} alt="" className="left" />
          <div className="container">
            <h2>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <div className="sertifikat_item">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
          </div>
          <img src={img1} alt="" className="right" />
        </section>
      </>
    );
  }
}

export default Sertifikat;
