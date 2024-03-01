import { Component } from "react";
import "./index.scss";
import img from "../../../public/assets/social (1).png";
import img2 from "../../../public/assets/logo.png";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer">
              <img src={img2} alt="" />
              <img src={img} alt="" />
            </div>
            <div className="footer_item">
              <div className="item_left">
                <div className="card">
                  <h2>Продукция</h2>
                  <p>Ламинатные тубы</p>
                  <p>Экструзионные тубы</p>
                  <p>Другая упаковка</p>
                </div>
                <div className="card">
                  <h2>Компания</h2>
                  <p>О нас</p>
                  <p>Наша команда</p>
                  <p>Сертификаты</p>
                </div>
                <div className="card">
                  <h2>Разделы</h2>
                  <p>Контакты</p>
                  <p>Новости</p>
                  <p>Вакансии</p>
                </div>
              </div>
              <div className="item_right">
                <div className="card">
                  <p className="col">Беларусь</p>
                  <p>+375 (17) 270 53 77</p>
                  <p>+375 (17) 270 53 78</p>
                </div>
                <div className="card">
                  <p className="col">Европа</p>
                  <p>+48 73 1111 044</p>
                </div>
                <div className="card">
                  <p className="col">Москва</p>
                  <p>+7 (495) 280 73 44</p>
                  <p>+375 (17) 270 53 78</p>
                </div>
                <div className="card">
                  <p className="col">Екатеринбург</p>
                  <p>+7 (343) 346 82 06</p>
                </div>
              </div>
            </div>
            <p className="fo">
              © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
              сайтов SkyWeb.by
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
