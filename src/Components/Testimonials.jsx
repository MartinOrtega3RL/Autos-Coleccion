import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Testimonios</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>
              "Una app increíble para cualquier amante de los autos. ¡La
              recomiendo totalmente!"
            </p>
            <h4>Juan Pérez</h4>
          </div>
          <div className="testimonial-item">
            <p>
              "He descubierto tantos autos que no conocía. Es como un museo en
              tu bolsillo."
            </p>
            <h4>Maria López</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
