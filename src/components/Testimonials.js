import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      message:
        "Stonepedia has completely transformed our workspace. The quality of their products is exceptional!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVLfKDAjMCre7NoctRD1Dwg9GhO-brRDRCjQyUP-KMVAB1hlQPM=w64-h64-c-rp-mo-br100",
      rating: 5, // Add rating for the testimonial
    },
    {
      name: "vishaka Smith",
      role: "Interior Designer",
      message:
        "I recommend Stonepedia to all my clients. Their service and attention to detail are unmatched!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVEVYNDvn4OsuxtL1ay1qM8AmiVfAejFllmXt7AV0n5D3mMjvD_Zg=w64-h64-c-rp-mo-br100",
      rating: 4, // Add rating for the testimonial
    },
    {
      name: "Michael Lee",
      role: "Architect",
      message:
        "Their products are both aesthetically pleasing and durable. Highly recommend!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUadPgQswf8Unpfl9gSeluEr9IsfxT_RvLL_YX5G1cIt7TTaA6D=w64-h64-c-rp-mo-br100",
      rating: 5, // Add rating for the testimonial
    },
  ];

  return (
    <div id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-container">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="message">"{testimonial.message}"</p>
            <div className="rating">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <span key={idx} className="star">&#9733;</span> // Star rating
              ))}
            </div>
            <div className="expert-badge">Expert Approved</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
