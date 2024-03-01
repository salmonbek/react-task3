import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/video (1).png";
class Kompani extends Component {
  render() {
    return (
      <>
        <section className="kompani_Sektion">
          <div className="container">
            <h2 className="kompani">
              <span className="oq"> О компании </span>
              <span>LEANGROUP</span>
            </h2>
            <div className="kompani_w">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="pp">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.{" "}
                </p>
                <p>
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                </p>{" "}
                <p>
                  С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Kompani;
