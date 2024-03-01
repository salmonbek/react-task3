import "./Hero.scss";
import Img from "../../../public/assets/social.png";

function index() {
  return (
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
  );
}

export default index;
