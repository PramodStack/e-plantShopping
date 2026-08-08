import React from "react";

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About Paradise Nursery</h1>

        <p>
          Paradise Nursery is an online plant shop created for people
          who love bringing nature into their homes and workplaces.
        </p>

        <p>
          We offer a variety of beautiful houseplants including
          indoor plants, succulent plants, and flowering plants.
        </p>

        <p>
          Our goal is to make it simple for customers to discover,
          select, and purchase plants that make their living spaces
          healthier and more beautiful.
        </p>

        <div className="about-features">
          <div>
            <span>🌱</span>
            <h3>Quality Plants</h3>
            <p>Healthy and beautiful plants for your home.</p>
          </div>

          <div>
            <span>🚚</span>
            <h3>Easy Shopping</h3>
            <p>A simple and convenient online shopping experience.</p>
          </div>

          <div>
            <span>💚</span>
            <h3>Nature First</h3>
            <p>Helping you create greener and happier spaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
