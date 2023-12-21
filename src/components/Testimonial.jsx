import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Aditya"}
          feedback={"Your a good Designer and have lots of potentia"}
        />

        <TestimonialCard
          name={"Arpit"}
          feedback={
            "Very Punctual and complete every project in less then a week"
          }
        />

        <TestimonialCard
          name={"Kavyansh"}
          feedback={"Amazing work as a fresher"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;