import React from "react";
import './/Home.css'
import Navibar from "./Navibar";
function Home(){
    return(
        <div>
          <Navibar/>
            <div className="about-dazz-container">
      <div className="welcome-section">
        <h1>Welcome to Dazz</h1>
        <p>Where innovation meets excellence in the world of software solutions.</p>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Dazz, our mission is to revolutionize the digital landscape by providing innovative software solutions
          that transform the way businesses operate. We strive to be at the forefront of technology, driving progress
          and creating value for our clients.
        </p>
      </div>

      <div className="who-we-are-section">
        <h2>Who We Are</h2>
        <div className="innovators">
          <h3>Passionate Innovators</h3>
          <p>
            Dazz is a team of passionate innovators, thinkers, and problem solvers. We thrive on challenges and believe
            in pushing the boundaries of what's possible in the digital realm.
          </p>
        </div>

        <div className="client-centric">
          <h3>Client-Centric Approach</h3>
          <p>
            Our clients are at the heart of everything we do. We are committed to understanding their unique needs and
            delivering customized solutions that exceed expectations.
          </p>
        </div>

        <div className="collaborative-culture">
          <h3>Collaborative Culture</h3>
          <p>
            Collaboration is the cornerstone of our culture. We foster an environment where creativity flourishes
            through open communication and teamwork.
          </p>
        </div>
      </div>

      <div className="sets-us-apart-section">
        <h2>What Sets Us Apart</h2>
        <div className="cutting-edge-tech">
          <h3>Cutting-Edge Technology</h3>
          <p>
            We stay ahead of the curve by embracing the latest technologies. Our team is equipped with the skills and
            knowledge to deliver solutions that are not just current but future-proof.
          </p>
        </div>

        <div className="quality-driven">
          <h3>Quality-Driven</h3>
          <p>
            Quality is non-negotiable at Dazz. From concept to delivery, we adhere to the highest standards, ensuring
            that our products and services stand out in terms of reliability, performance, and user experience.
          </p>
        </div>

        <div className="agile-methodology">
          <h3>Agile Methodology</h3>
          <p>
            In a fast-paced digital landscape, agility is key. We embrace Agile methodologies to adapt to change
            quickly and deliver results with speed and efficiency.
          </p>
        </div>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development: Tailored solutions to meet your unique business needs.</li>
          <li>Mobile App Development: Harness the power of mobile with intuitive and feature-rich applications.</li>
          <li>Web Development: Crafted web solutions that make a lasting impact.</li>
          <li>Consulting Services: Expert guidance to navigate the complexities of the digital landscape.</li>
        </ul>
      </div>

      <div className="join-us-section">
        <h2>Let's Create Tomorrow, Today</h2>
        <p>
          Join us on our journey to redefine the possibilities of software. Whether you're a business seeking innovative
          solutions or a professional looking to join a dynamic team, Dazz is the catalyst for your success.
        </p>
        <p>Discover the Dazz difference – where innovation, quality, and client satisfaction converge.</p>
      </div>

      <div className="welcome-message">
        <h1>Welcome to Dazz Software Company</h1>
      </div>
    </div>
    </div>
  );
};

export default Home;

            