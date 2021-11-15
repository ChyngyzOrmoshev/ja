import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./ios.scss";
import { macos } from "../index";

function Ios() {
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
    <section className="ios" id="iOS">
      <div className="ios__header">
        <img src={macos} alt="icons_apple" />
        <h2>Developer</h2>
      </div>
      <h1>iOS Developer</h1>
      <h4>СТАНЬ IOS-РАЗРАБОТЧИКОМ С НУЛЯ ЗА 9 МЕСЯЦЕВ</h4>
      <ul>
        <li>Создавайте приложения. Постройте свое будущее.</li>
        <li>Освойте ios - разработку создав свыше 15 приложений</li>
        <li>
          Если вы хотите стать частью экосистемы Apple и их безумных финансовых
          планах
        </li>
      </ul>
      <p>Добро пожаловать в мир Apple</p>
      <a href="https://www.notion.so/iOS-Developer-915042ad49b14e70ac0e9ca724bafd78">
        <button>
          <span ref={animatedTextRef}></span>
        </button>
      </a>
    </section>
  );
}

export default Ios;
