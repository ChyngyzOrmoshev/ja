import React from "react";
import "./About.scss";
import { stars, TimurMon } from "../index";

function About() {
  return (
    <section className="About" id="About">
      <div className="stars">
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
        <img src={stars} alt="stars" />
      </div>
      <a href="https://www.notion.so/da4b3803eac64db0acf9d071d3c33139">
        Jyldyz Academy - это сообщество цифровых кочевников, наше коллективное
        видение - сделать обучение 21 века реальностью для всех.
      </a>
      <div className="About__center">
        <p>
          Наша команда опытных преподавателей наряду с профессионалами в области
          коммуникаций, технологий, бизнеса внедряет инновации в комплексный
          процесс обучения гибким навыкам.
        </p>
        <img src={TimurMon} alt="stars" />
      </div>
      <p>
        Мы предлагаем образовательный опыт, который готовит всех учащихся к
        тому, чтобы они могли учиться на протяжении всей жизни и вносить свой
        вклад в постоянно меняющийся мир.
      </p>
      <div className="About__footer">
        <p>
          Наша Миссия - подготовить 10,000 высококлассных программистов и внести
          весомый вклад в то, чтобы экспортная выручка IT-услуг Кыргызстана
          составила не менее $100 млн в год
        </p>
      </div>
    </section>
  );
}

export default About;
