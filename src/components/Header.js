import React from "react";
import MaterialIcon from "material-icons-react";
import logo from "../assets/logo.png";

const Header = () => (
  <header>
    <nav>
      <img src={logo} alt="Facebook" title="Facebook" />
      <div className="account">
        <span>Meu Perfil</span>
        <MaterialIcon icon="account_circle" invert size={24} />
      </div>
    </nav>
  </header>
);

export default Header;
