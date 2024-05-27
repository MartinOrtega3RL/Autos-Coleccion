import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero">
      <div className="container">
        <Slider {...settings}>
          <div className="slide">
            <h2>Descubre los Autos de tus Sueños</h2>
            <p>
              Explora, colecciona y comparte autos clásicos y exclusivos con
              nuestra app.
            </p>
          </div>
          <div className="slide">
            <h2>Catálogo Extenso</h2>
            <p>Accede a una amplia colección de autos clásicos y modernos.</p>
          </div>
          <div className="slide">
            <h2>Comparte con Amigos</h2>
            <p>Comparte tus autos favoritos con otros entusiastas.</p>
          </div>
        </Slider>
        <button className="download-button">Descargar Ahora</button>
      </div>
    </section>
  );
};

export default HeroSection;
