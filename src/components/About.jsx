import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // ייבוא העיצוב

export default function About() {
    return (
        <div className="about-container">
        <h2>Welcome to our luxury store!</h2>
        <p>Here you'll find a wide range of high-quality and stylish shoes with a contemporary design.</p>
        <p>Our products are carefully selected to ensure a perfect shopping experience.</p>
        <p>Each item on our site is designed especially for you, with an emphasis on comfort, beauty, and elegance.</p>
       
        <div>
          <h2>Why choose us?</h2>
          <ul>
            <li>We offer premium products with attention to every detail.</li>
            <li>Our shoes are crafted to provide maximum comfort without compromising on style.</li>
            <li>Enjoy personalized service and a seamless shopping experience from start to finish.</li>
          </ul> <Link to="/ContactForm">
          <button className="buy-button">Contact Us</button>
        </Link>
        </div>
            </div>
    );
}
