import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Autos de Colección</h1>
        <nav>
          <ScrollLink to="features" smooth={true} duration={500}>
            Características
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            Testimonios
          </ScrollLink>
          <ScrollLink to="cta" smooth={true} duration={500}>
            Descargar
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
