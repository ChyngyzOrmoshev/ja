import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./WebDev.scss";

function WebDev() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Узнать подробнее"],
    });
  }, []);
  return (
    <section className="WebDev" id="WebDev">
      <div className="WebDev__header">
        <h2>Website Design</h2>
        <h2>Website Development</h2>
      </div>
      <h1>Веб - Разработчик с нуля</h1>
      <h4>СТАНЬ FRONTEND-РАЗРАБОТЧИКОМ С НУЛЯ ЗА 6 МЕСЯЦЕВ</h4>
      <ul>
        <li>Научимся программировать на Javascript и React JS.</li>
        <li>
          Сможете хорошо зарабатывать на этом уже, даже если раньше не
          программировали.
        </li>
        <li>Проектное обучение - 70% практики, никакой скучной теории.</li>
        <li>
          Курс подходит и для начинающих и для тех, кто уже знаком с
          веб-разработкой.
        </li>
      </ul>
      <p>
        Мы по шагам пройдем путь от установки редактора кода до создания
        собственных реальных веб-сайтов и веб приложений.
      </p>
      <a href="https://www.notion.so/864738c444ee4888a505f843224573b8">
        <button>
          <span ref={animatedTextRef}></span>
        </button>
      </a>
    </section>
  );
}

export default WebDev;
