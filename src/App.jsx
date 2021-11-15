import "./App.scss";
import { iconSearch } from "./index";
import { TopBar, WebDev, Ios, Free, Works, About } from "./components/index";

function App() {
  return (
    <div className="App">
      <div className="container">
        <input className="search" type="search" placeholder="Search" />
        <img src={iconSearch} alt="btn" className="btnSearch" />
      </div>
      <section className="glass">
        <TopBar />
        <div className="section">
          <WebDev />
          <Ios />
          <Free />
          <Works />
          <About />
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
