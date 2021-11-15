import React from "react";
import "./TopBar.scss";
import { Logo, telegram, whatsapp } from "..";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <img src={Logo} alt="iconLogo" />
        <h3>JYLDYZ ACADEMY</h3>
        <p>WE CREATE DIGITAL NOMADS</p>
      </div>
      <div className="topbar__links">
        <a href="#WebDev" className="topbar__link">
          <h2>КУРСЫ ПО ВЕБ РАЗРАБОТКЕ</h2>
        </a>
        <a href="#iOS" className="topbar__link">
          <h2>КУРСЫ ПО IOS РАЗРАБОТКЕ</h2>
        </a>
        <a href="#Free" className="topbar__link">
          <h2>БЕСПЛАТНЫЕ РЕСУРСЫ</h2>
        </a>
        <a href="#Works" className="topbar__link">
          <h2>КАК РАЗВИВАТЬ КАРЬЕРУ</h2>
        </a>
        <a href="#About" className="topbar__link">
          <h2>О НАС</h2>
        </a>
      </div>
      <div className="topbar__social">
        <div className="topbar__icons">
          <a href="#!">
            <img src={telegram} alt="iconTelegram" />
          </a>
          <a href="#!">
            <img src={whatsapp} alt="iconWhatsapp" />
          </a>
        </div>

        <p>
          <a href="tel:+996999000917">+996 999 000 917</a>
        </p>
        <p>
          Нажмите на иконку <br /> или на <br /> Номер для связи
        </p>
      </div>
    </div>
  );
}

export default TopBar;
