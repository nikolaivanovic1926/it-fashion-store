import { Link } from "react-router-dom";
import Team from "./Team";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
      <section className="about-top">
        <img
          className="about-image"
          src="/images/about.jpg"
          alt="Our team at work"
        />

        <div className="about-text">
          <h1>So, who are we?</h1>
          <p>
            Since our founding in 2015, our mission has always been to bring
            quality and convenience to our customers. We believe in
            transparency, sustainability, and delivering value in every product
            we offer.
          </p>
          <p>
            Over the years, we’ve grown from a small local shop to a trusted
            e-commerce brand serving thousands of satisfied customers. Every
            product is carefully selected and tested to ensure it meets our high
            standards.
          </p>
          <p>
            Our team is passionate about innovation and constantly works on
            improving the shopping experience, offering new products, and
            listening to our community’s feedback.
          </p>
          <p>
            We are committed to giving back to the community and supporting
            local initiatives, because we believe a business should make a
            positive impact beyond its sales.
          </p>

          <Link to="/aboutUs" className="home-button about-button">
            Get in Touch
          </Link>
        </div>
      </section>

      <Team />
    </div>
  );
}

export default AboutUs;