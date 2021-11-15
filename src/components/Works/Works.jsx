import React from "react";
import "./Works.scss";
import { img1, img2 } from "../index";

function Works() {
  return (
    <section className="works" id="Works">
      <a href="https://www.notion.so/0095cfa4b9134849a8aba07ce11b35c1">
        ВАЖНОСТЬ SOFT SKILLS ДЛЯ РАЗВИТИЯ КАРЬЕРЫ
      </a>
      <div className="works__container">
        <img src={img1} alt="SoftSkills" />
        <p>
          Современная разработка проектов и ее успешность сильно зависит от
          дизайн мышления, методологии разработки, гибких навыков и командной
          работы.{" "}
        </p>
      </div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="works__container">
        <p>
          Наш образовательный опыт полностью фокусируется на развитии софт
          скилов как основы для эффективного обучения на протяжении всей жизни.
        </p>
        <img src={img2} alt="" />
      </div>
    </section>
  );
}

export default Works;
