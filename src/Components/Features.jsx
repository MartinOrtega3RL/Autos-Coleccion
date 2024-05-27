import React from "react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Características</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Catálogo Extenso</h3>
            <p>Accede a una amplia colección de autos clásicos y modernos.</p>
          </div>
          <div className="feature-item">
            <h3>Comparte con Amigos</h3>
            <p>Comparte tus autos favoritos con otros entusiastas.</p>
          </div>
          <div className="feature-item">
            <h3>Actualizaciones Diarias</h3>
            <p>Mantente al día con nuevas incorporaciones y eventos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
