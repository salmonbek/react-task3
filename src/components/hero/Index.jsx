import "./Hero.scss";
import Img from "../../../public/assets/social.png";
import Img2 from "../../../public/assets/video (1).png";
import Img3 from "../../../public/assets/s1.png";
import Img4 from "../../../public/assets/s2.png";
import Img5 from "../../../public/assets/s3.png";
import Img6 from "../../../public/assets/s4.png";
import Img7 from "../../../public/assets/s5.png";
import Img8 from "../../../public/assets/b1.png";
import Img9 from "../../../public/assets/b2.png";
import Img10 from "../../../public/assets/b3.png";
import Img11 from "../../../public/assets/b4.png";
import Img12 from "../../../public/assets/b5.png";
import D1 from "../../../public/assets/d1.png";
import D2 from "../../../public/assets/d2.png";
import D3 from "../../../public/assets/d4.png";
import D4 from "../../../public/assets/d5.png";
import D5 from "../../../public/assets/d6.png";
import frame2 from "../../../public/assets/img-input.png";
import A1 from "../../../public/assets/a1.png";
import A2 from "../../../public/assets/a2.png";
import A3 from "../../../public/assets/a3.png";
import Logo from "../../../public/assets/logo.png";
import Im from "../../../public/assets/soacial2.png";

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
            <div className="copmany-flex-right">
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
            <h1>Качество продукции подтверждают</h1>
            <span>сертификаты</span>
          </div>
          <div className="img-flex">
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="flex">
            <h1>Наша </h1>
            <span>продукция</span>
          </div>
          <div className="btns">
            <button className="btn1">Экструзионные тубы</button>
            <button className="btn2">Экструзионные тубы</button>
            <button className="btn1">Перейти в каталог</button>
          </div>
          <div className="img-flex">
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img10} alt="" />
            <img src={Img11} alt="" />
            <img src={Img12} alt="" />
          </div>
          <button className="btn-bottom">Перейти в каталог</button>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="flex">
            <h1>Получить подробную</h1>
            <span>информацию</span>
          </div>
          <p>
            Просто заполните форму, наш менеджер свяжется вами в ближайшее время
          </p>
          <img src={frame2} alt="" />
          <button>Получить информацию</button>
        </div>
      </div>
      <div className="comanda">
        <div className="container">
          <div className="flex">
            <h1>Наша </h1>
            <span>команда</span>
          </div>
          <div className="card">
            <div className="card-items">
              <img src={D1} alt="" />
              <h3>Войнич Дарья</h3>
              <p>Заместитель директора по продажам</p>
              <h4>+375 (17) 270-53-77 (317)</h4>
            </div>
            <div className="card-items">
              <img src={D2} alt="" />
              <h3>+375 (17) 270-53-77 (317)</h3>
              <p>Начальник отдела сопровождения</p>
              <h4>+375 (17) 270-53-77 </h4>
              <h5>k.melnichenko@leangroup.by</h5>
            </div>
            <div className="card-items">
              <img src={D3} alt="" />
              <h3>Дмитроченко Дмитрий</h3>
              <p>Начальник отдела допечатной подготовки</p>
              <h4>+375 (17) 270-53-77 (333)</h4>
              <h5>dmitrochenko@leangroup.by</h5>
            </div>
            <div className="card-items">
              <img src={D4} alt="" />
              <h3>Антух Евгений</h3>
              <p>Начальник отдела снабжения</p>
              <h4> +375 44 764-16-28</h4>
              <h5>j.antuh@leangroup.by</h5>
            </div>
            <div className="card-items">
              <img src={D5} alt="" />
              <h3>Мисник Елена</h3>
              <p>Специалист по работе с клиентами</p>
              <h4> +375 29 329-34-03</h4>
              <h5>e.misnik@leangroup.by</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <h1>Новости</h1>
          <div className="card">
            <div className="card-items">
              <img src={A1} alt="" />
              <h4>2022</h4>
              <p>ЛеанГрупп серебряный призер EcoVadis!</p>
            </div>
            <div className="card-items">
              <img src={A2} alt="" />
              <h4>21.01.2022</h4>
              <p>ЛеанГрупп серебряный призер EcoVadis!</p>
            </div>
            <div className="card-items">
              <img src={A3} alt="" />
              <h4>16.12.2021</h4>
              <p>Туба, как вид упаковки</p>
            </div>
          </div>
          <button>Все новости</button>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="flex1">
            <img src={Logo} alt="" />
            <img src={Im} alt="" />
          </div>
          <hr className="hr" />
          <div className="flex2">
            <div>
              <h1>Продукция</h1>
              <h2>Ламинатные тубы</h2>
              <h2>Экструзионные тубы</h2>
              <h2>Другая упаковка</h2>
            </div>
            <div>
              <h1>Компания</h1>
              <h2>О нас</h2>
              <h2>Наша команда</h2>
              <h2>Сертификаты</h2>
            </div>
            <div>
              <h1>Разделы</h1>
              <h2>Контакты</h2>
              <h2>Новости</h2>
              <h2>Вакансии</h2>
            </div>
            <div>
              <h5>Беларусь</h5>
              <h2>+375 (17) 270 53 77</h2>
              <h2>+375 (17) 270 53 78</h2>
              <br />
              <h5>Москва</h5>
              <h2>+7 (495) 280 73 44</h2>
              <h2>+7 (495) 280 73 44</h2>
            </div>
            <div>
              <h5>Европа</h5>
              <h2>+48 73 1111 044</h2>
              <br />
              <br />
              <h5>Екатеринбург</h5>
              <h2>+7 (343) 346 82 06</h2>
            </div>
          </div>
          <p>
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    </div>
  );
}

export default index;
