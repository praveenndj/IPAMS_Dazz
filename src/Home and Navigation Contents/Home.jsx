import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './/Home.css'
import Navibar from "./Navibar";
import homeImage from "../Home and Navigation Contents/images/homeimg.gif"
import FooterContent from "../FooterContent";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,delay:100 });
  }, []);
    return(
        <div>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <Navibar/>
            <div className="about-dazz-container">
              
      <div className="welcome-section" >
        <div className="welcome-section-content">
        <h1 className="typing-content">Welcome to Dazz Analysis Tool</h1>
        <p>Where innovation meets excellence in the world of software solutions.</p>
        </div>
        <div className="welcome-section-img"><img src={homeImage} alt='Dazz Company' width={400}/></div>
      </div>

      <div className="mission-section">
        <div data-aos="fade-right"><h2>Our Mission</h2></div>
        <div data-aos="fade-left"><p>
          At Dazz, our mission is to revolutionize the digital landscape by providing innovative<br/> software solutions
          that transform the way businesses operate.  <br/>We strive to be at the forefront of technology, driving progress
          and creating value for our clients.
        </p></div>
      </div>
     
      <div className="who-we-are-section" >
        <h2 data-aos="fade-right">Who We Are</h2>
        <div data-aos="fade-left">
        <div className="innovators">
          <h3>Passionate Innovators</h3>
          <div><p>
            Dazz is a team of passionate innovators, thinkers, and problem solvers. We thrive on challenges<br/> and believe
            in pushing the boundaries of what's possible in the digital realm.
          </p></div>
        </div>

        <div className="client-centric">
          <h3>Client-Centric Approach</h3>
          <p>
            Our clients are at the heart of everything we do. We are committed to understanding their unique<br/> needs and
            delivering customized solutions that exceed expectations.
          </p>
        </div>

        <div className="collaborative-culture">
          <h3>Collaborative Culture</h3>
          <p>
            Collaboration is the cornerstone of our culture. We foster an environment where creativity flourishes<br/>
            through open communication and teamwork.
          </p>
        </div>
      </div>
      </div>
      <div className="sets-us-apart-section">
        <h2 data-aos="fade-right">What Sets Us Apart</h2>
        <div data-aos="fade-left">
        <div className="cutting-edge-tech">
          <h3>Cutting-Edge Technology</h3>
          <p>
            We stay ahead of the curve by embracing the latest technologies. Our team is equipped<br/> with the skills and
            knowledge to deliver solutions that are not just current but future-proof.
          </p>
        </div>

        <div className="quality-driven">
          <h3>Quality-Driven</h3>
          <p>
            Quality is non-negotiable at Dazz. From concept to delivery, we adhere to the highest <br/> standards, ensuring
            that our products and services stand out<br/> in terms of reliability,performance, and user experience.
          </p>
        </div>

        <div className="agile-methodology">
          <h3>Agile Methodology</h3>
          <p>
            In a fast-paced digital landscape, agility is key. We embrace Agile methodologies to adapt<br/> to change
            quickly and deliver results with speed and efficiency.
          </p>
        </div>
      </div>
      </div>
      <div className="features-section-heading" z><center><h2>Features of Dazz Analytic Tool</h2></center></div>
      <div className="features-section">
           <div className="features-content"  data-aos="flip-left" data-aos-delay='300'><div className="content-img"><svg xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" fill="currentColor" viewBox="0 0 128 160" x="0px" y="0px"><path d="M122,8H6a6,6,0,0,0-6,6V98a6,6,0,0,0,6,6H62v12H31a2,2,0,0,0,0,4H97a2,2,0,0,0,0-4H66V104h56a6,6,0,0,0,6-6V14A6,6,0,0,0,122,8Zm2,90a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H122a2,2,0,0,1,2,2Z"/><path d="M27,16A19,19,0,1,0,46,35,19,19,0,0,0,27,16ZM18.32,47.21a8.73,8.73,0,0,1,17.36,0,14.9,14.9,0,0,1-17.36,0Zm4.74-15.72A3.94,3.94,0,1,1,27,35.43,3.95,3.95,0,0,1,23.06,31.49ZM39,44a12.74,12.74,0,0,0-6.17-7.1,7.94,7.94,0,1,0-11.66,0A12.74,12.74,0,0,0,15,44a15,15,0,1,1,24,0Z"/><path d="M44,62H10a2,2,0,0,0,0,4H44a2,2,0,0,0,0-4Z"/><path d="M10,76H31.53a2,2,0,0,0,0-4H10a2,2,0,0,0,0,4Z"/><path d="M52,16a2,2,0,0,0-2,2V94a2,2,0,0,0,4,0V18A2,2,0,0,0,52,16Z"/><path d="M44,82H10a2,2,0,0,0-2,2V94a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V84A2,2,0,0,0,44,82ZM42,92H12V86H42Z"/><path d="M120,24.07V18a2,2,0,0,0-2-2H60a2,2,0,0,0-2,2V51a2,2,0,0,0,2,2h58a2,2,0,0,0,2-2V24.08ZM116,20v3l-10.35,6.85L95.53,27.07a2,2,0,0,0-1.94.52L83.53,37.64,72.77,33.15a2,2,0,0,0-2,.24L62,39.87V20ZM62,49V44.84l10.27-7.56,11,4.57a2,2,0,0,0,2.18-.44L95.59,31.23l9.88,2.7a2,2,0,0,0,1.63-.26l8.9-5.89V49Z"/><path d="M120,67a8,8,0,0,0-15.51-2.74l-7.63-.75A8,8,0,0,0,81,65a7.81,7.81,0,0,0,.15,1.54l-9,4.32A8,8,0,1,0,64,83.74V92H60a2,2,0,0,0,0,4h58a2,2,0,0,0,0-4h-4V74.74A8,8,0,0,0,120,67Zm-8-4a4,4,0,1,1-4,4A4,4,0,0,1,112,63ZM89,61a4,4,0,1,1-4,4A4,4,0,0,1,89,61ZM62,76a4,4,0,1,1,4,4A4,4,0,0,1,62,76Zm6,7.74A8,8,0,0,0,74,76a7.81,7.81,0,0,0-.15-1.54l9-4.32A8.05,8.05,0,0,0,87,72.74V92H68ZM91,92V72.74a8,8,0,0,0,5.59-5.24l7.52.74a8,8,0,0,0,5.89,6.5V92Z"/></svg></div><div className="content-text"><h5>Personalized Dashboards</h5><p><br/> Dive into your customized analytics dashboard, delivering real-time insights into your performance metrics. Visualize your achievements and areas for improvement at a glance.</p></div></div>
           <div className="features-content"  data-aos="flip-left" data-aos-delay='300'><div className="content-img"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 128 160" x="0px" y="0px"><title>Miscellaneous 182 solid</title><path d="M97.624,61.64941l-.01758-.04736L87.59668,35.32568a13.82966,13.82966,0,0,0-8.5553-8.76208,19.13168,19.13168,0,0,1-3.43079,3.44263c4.32068.062,7.12573,3.6109,8.23413,6.70569L93.8584,62.999a2.61513,2.61513,0,0,1-1.50879,3.26855,3.30264,3.30264,0,0,1-2.583-.04,2.69048,2.69048,0,0,1-1.47266-1.53516L81.88867,46.34082A2.00029,2.00029,0,0,0,78,47V80H50V47a2,2,0,0,0-3.88818-.65918L39.7085,64.68652a2.6936,2.6936,0,0,1-1.4751,1.541,3.29661,3.29661,0,0,1-2.584.03906,2.60287,2.60287,0,0,1-1.51709-3.24072L44.167,36.6792a11.03662,11.03662,0,0,1,8.35248-6.57568A19.14093,19.14093,0,0,1,49.19086,26.874a14.95012,14.95012,0,0,0-8.77435,8.41412L30.377,61.64844a6.60672,6.60672,0,0,0,3.76758,8.32422,7.31422,7.31422,0,0,0,5.73-.09766,6.65545,6.65545,0,0,0,3.6084-3.86426L46,58.79932V82a2.0001,2.0001,0,0,0,2,2v37a7,7,0,0,0,14,0V84h4v37a7,7,0,0,0,14,0V84a2.0001,2.0001,0,0,0,2-2V58.79932l2.51953,7.21729A6.64955,6.64955,0,0,0,88.125,69.875a7.31742,7.31742,0,0,0,5.72949.09863A6.60985,6.60985,0,0,0,97.624,61.64941ZM58,121a3,3,0,0,1-6,0V84h6Zm18,0a3,3,0,0,1-6,0V84h6Z"/><path d="M64,30A15,15,0,1,0,49,15,15.01672,15.01672,0,0,0,64,30Z"/><path d="M84.44336,23.7749a1.99815,1.99815,0,0,0,2.69629-.853A17.72494,17.72494,0,0,0,89,15a15.162,15.162,0,0,0-2.27246-8.00781,2,2,0,1,0-3.45508,2.01563A11.22374,11.22374,0,0,1,85,15a13.81555,13.81555,0,0,1-1.40918,6.07813A1.9991,1.9991,0,0,0,84.44336,23.7749Z"/><path d="M95.60547,2.80762a1.99983,1.99983,0,0,0-3.21094,2.38477C94.8877,8.55029,96,11.57471,96,15a18.64557,18.64557,0,0,1-2.9375,9.89746,2.00024,2.00024,0,0,0,3.33789,2.20508A22.4932,22.4932,0,0,0,100,15C100,10.66016,98.64453,6.8999,95.60547,2.80762Z"/><path d="M103.75488,29.74561a1.99966,1.99966,0,0,0,2.72266-.76953A29.48615,29.48615,0,0,0,110,15,25.21776,25.21776,0,0,0,105.69336.936,1.99987,1.99987,0,1,0,102.30664,3.064,21.44148,21.44148,0,0,1,106,15a25.724,25.724,0,0,1-3.01465,12.02393A2.0002,2.0002,0,0,0,103.75488,29.74561Z"/><path d="M44.00781,6.27246a2.00021,2.00021,0,0,0-2.73535.71973A15.1527,15.1527,0,0,0,39,15a17.73676,17.73676,0,0,0,1.85938,7.92139,1.99981,1.99981,0,0,0,3.5498-1.84277A13.81415,13.81415,0,0,1,43,15a11.22015,11.22015,0,0,1,1.72754-5.99219A2,2,0,0,0,44.00781,6.27246Z"/><path d="M35.19238,2.39453a1.9994,1.9994,0,0,0-2.79785.41309C29.35547,6.8999,28,10.66016,28,15a22.48525,22.48525,0,0,0,3.6001,12.10254A1.99984,1.99984,0,0,0,34.937,24.89746,18.65378,18.65378,0,0,1,32,15c0-3.42529,1.11182-6.44971,3.60547-9.80762A1.9996,1.9996,0,0,0,35.19238,2.39453Z"/><path d="M25.064.30664A1.99794,1.99794,0,0,0,22.30664.936,25.21776,25.21776,0,0,0,18,15a29.48084,29.48084,0,0,0,3.52295,13.97607,2,2,0,0,0,3.49121-1.95215A25.7295,25.7295,0,0,1,22,15,21.44536,21.44536,0,0,1,25.69336,3.064,1.99932,1.99932,0,0,0,25.064.30664Z"/><path d="M126,124H100a2,2,0,0,0,0,4h26a2,2,0,0,0,0-4Z"/><path d="M92,124H90a2,2,0,0,0,0,4h2a2,2,0,0,0,0-4Z"/><path d="M38,124H36a2,2,0,0,0,0,4h2a2,2,0,0,0,0-4Z"/><path d="M2,128H28a2,2,0,0,0,0-4H2a2,2,0,0,0,0,4Z"/></svg></div><div className="content-text"><h5>Stay Informed</h5><p><br/>Access the latest company updates and announcements directly from the home page. Stay informed about news, events, and important happenings within your organization.</p></div></div>
           <div className="features-content" data-aos="flip-left" data-aos-delay='300'><div className="content-img"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
  <style type="text/css">
    {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
  </style>
  <path className="st0" d="M108,435.4V476h41.1v-52.6C135.7,428,122,432,108,435.4L108,435.4z M98,476v-38.3c-17.6,3.9-35.6,6.8-53.9,8.8V476H98z   M159.1,419.9V476h41.1v-73.5C186.8,409,173.2,414.7,159.1,419.9L159.1,419.9z M210.2,397.5V476h41.1V373.3  C238.2,382.1,224.4,390.2,210.2,397.5L210.2,397.5z M261.3,366.5V476h41.1V332.9C289.6,345,275.8,356.1,261.3,366.5L261.3,366.5z   M312.3,323.3l0.1,152.7h41.1V273.5C341.5,291.1,327.7,307.7,312.3,323.3L312.3,323.3z M363.5,257.9c0,0.1,0,0.2,0,0.3V476h41.1  V155.8c-1.3,1.3-2.3,3.1-2.7,5.1C394.8,194.9,381.8,227.6,363.5,257.9L363.5,257.9z M414.6,153v323h37.5V153H414.6z M373,42.4  c0-6.6,10-6.6,10,0v20c0,6.6-10,6.6-10,0V42.4z M467.8,42.4c0-6.6,10-6.6,10,0v20c0,6.6-10,6.6-10,0V42.4z M407.4,101.3h13V88.4  c-14.3-2.4-25.1-14.9-25.1-29.7V31c0-2.7,2.2-5,5-5h50.2c2.8,0,5,2.2,5,5v27.7c0,14.7-10.8,27.2-25.1,29.7v12.9h13c2.8,0,5,2.2,5,5  v24.5c0,2.8-2.2,5-5,5h-36.1c-2.7,0-5-2.2-5-5v-24.5C402.4,103.5,404.6,101.3,407.4,101.3L407.4,101.3z M438.5,111.3h-26.1v14.6  h26.1V111.3z M445.5,36h-40.2v22.7c0,17.6,21.5,26.9,34.3,14.2c3.7-3.6,5.9-8.7,5.9-14.2V36z M411.6,143h45.5c2.8,0,5,2.2,5,5v333  c0,2.8-2.2,5-5,5c-139.3,0-278.6,0-417.9,0c-2.7,0-5-2.2-5-5v-39c0-2.7,2.2-5,4.9-5c53.6-5.2,105-19.3,151.3-40.9  c99-46.2,179.5-129.9,201.7-237.2C394,149.6,402.1,143,411.6,143L411.6,143z M143.4,150.5c-0.1,0.1-0.3,0.1-0.5,0.1  c-8.4,2.3-15,7.8-19,14.7h0c-8.7,15.2-3.5,34.6,11.7,43.4l0,0c15.1,8.7,34.6,3.6,43.4-11.6l0,0c8.8-15.2,3.6-34.6-11.6-43.4  C160.3,149.7,151.8,148.3,143.4,150.5L143.4,150.5z M140.6,140.9c22.3-6,45.3,7.4,51.1,29.5c2.6,9.9,1.5,19.8-2.5,28.4  c2.9-0.5,12.4-2.6,15.1-3.6c1.3-0.6,6.5-4.6,13.3-9.6c6.5-4.9,14.3-10.8,22-16.1l0,0c8.9-6.1,20.8-0.8,25.1,8.3c2.4,5,3,8.9,1.2,14  c-1.5,4.3-4.6,8-8.4,11.1l-40.3,32.4c-0.6,0.6-1.4,1-2.3,1.2L166.3,247l-13.8,51.5l40.7,51.1c1.2,1.6,1.4,3.7,0.5,5.4l-10.9,40.5  c-0.6,2.2-2.6,3.7-4.8,3.7l0,0h-37.8c-3.3,0-5.8-3.1-4.7-6.5l10.2-38l-27-20.1l-15.9,77.9c-0.5,2.4-2.6,4-4.9,4v0H60  c-3.1,0-5.6-2.7-4.8-6.2l17.3-111L89.8,225h0c0.2-0.9,0.7-1.7,1.4-2.4l23-22.4c-6.5-12.7-6-28,1-39.9l0,0  C120.6,151.1,129.5,143.8,140.6,140.9L140.6,140.9z M181.6,210c-13.3,13.9-34.4,16.9-51,7.3l0,0c-4-2.3-7.6-5.2-10.6-8.7l-20.7,20.1  l-16.9,72.1L65.8,406.5h28l16.6-81.4c0.7-3.8,5-5.3,7.9-3.1l35.8,26.6c1.8,1.2,2.7,3.3,2.1,5.5l-9.4,35.2h27.4l9.5-35.5L143.3,303  c-1.1-1.2-1.5-2.9-1.1-4.6l15.3-56.9c0.5-1.9,2-3.2,3.8-3.6l50.5-10.9l39.6-31.8c5.2-4.2,7.5-8.8,3.7-14.3c-2.1-3.1-6.7-5.3-9.8-3.1  l0,0c-7.3,5-15.1,10.9-21.6,15.8c-7.5,5.7-13.7,10.5-16.5,11.2C197.7,207.4,190.6,209.1,181.6,210L181.6,210z M181.6,210" />
</svg>
</div><div className="content-text"><h5>Compete and Conquer</h5><p><br/>Check your standing on the Monthly Leaderboard. Compete with your peers and celebrate your success as you climb the ranks.</p></div></div>
      </div>
      <div className="services-section" >
        <h2 data-aos="fade-right">Our Services</h2>
        <ul data-aos="fade-left">
          <li>Custom Software Development: Tailored solutions to meet your unique business needs.</li>
          <li>Mobile App Development: Harness the power of mobile with intuitive and feature-rich applications.</li>
          <li>Web Development: Crafted web solutions that make a lasting impact.</li>
          <li>Consulting Services: Expert guidance to navigate the complexities of the digital landscape.</li>
        </ul>
      </div>

      <div className="join-us-section" data-aos="zoom-in">
        <h2>Let's Create Tomorrow, Today</h2>
        <p>
          Join us on our journey to redefine the possibilities of software. Whether you're a business seeking innovative
          solutions or a professional looking to join a dynamic team, Dazz is the catalyst for your success.
        </p>
        <p>Discover the Dazz difference – where innovation, quality, and client satisfaction converge.</p>
      </div>

    </div>
    <FooterContent/>
    </div>
  );
};

export default Home;




            