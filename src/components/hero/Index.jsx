import "./Hero.scss";
import Img from "../../../public/assets/social.png";
import Img2 from "../../../public/assets/video (1).png";

function index() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <h1>LEANGROUP - тубы и этикетки</h1>
            <h2>Ламинатные тубы</h2>
            <p>
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button className="btn">Каталог</button>
          </div>
          <div className="hero-right">
            <img src={Img} alt="" />
          </div>
        </div>
      </section>
      <div className="company">
        <div className="container">
          <div className="flex">
            {" "}
            <h1>О компании</h1>
            <span>LEANGROUP</span>
          </div>
          <div className="company-flex">
            <div className="copmany-flex-left">
              <img src={Img2} alt="" />
            </div>
            <div className="copmany-flex-left">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                <br />
                <br />
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                <br />
                <br />
                поддержания качества производимой нами продукции. С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate">
        <div className="container">
          <div className="flex">
            <h1></h1>
            <span></span>
          </div>
          <div className="img-flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
