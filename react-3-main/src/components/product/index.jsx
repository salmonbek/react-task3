import "./index.scss";
import img2 from "../../../public/assets/1 (1).png";
import img3 from "../../../public/assets/2 (1).png";
import img4 from "../../../public/assets/3 (1).png";
import img5 from "../../../public/assets/4 (1).png";
import img6 from "../../../public/assets/5 1.png";
import { Component } from "react";

class Product extends Component {
  render() {
    return (
      <>
        <section className="product">
          <div className="container">
            <h2>
              Наша <span>продукция</span>
            </h2>
            <div className="btns">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="product_item">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
            <button className="bottom_btn">Перейти в каталог</button>
          </div>
        </section>
      </>
    );
  }
}

export default Product;
