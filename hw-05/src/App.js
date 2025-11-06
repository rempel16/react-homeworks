import "./globals.css";
import Icon from "./components/Icon";

import logo from "./assets/g10.svg";
import { ReactComponent as Icon1 } from "./assets/Subtract.svg";
import { ReactComponent as Icon2 } from "./assets/Subtract (1).svg";
import { ReactComponent as Icon3 } from "./assets/Subtract (2).svg";


export default function App() {
  return (
    <div className="wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <div className="mainBlock">
        <h1 className="title">LIFE IS WASTED ON THE LIVING</h1>
        <p className="subtitle">Sign in</p>
        <p className="subtitle">with </p>

        <div className="iconsBlock">
          <Icon Svg={Icon1} />
          <Icon Svg={Icon2} />
          <Icon Svg={Icon3} />
        </div>
      </div>
    </div>
  );
}
