import React from 'react';
import "./About.css"
import pileofchoco from "../../assets/pileofchoco.jpeg"
import man from "../../assets/man.png"
import womann from "../../assets/womann.png"
import promanager from "../../assets/promanager.png"
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Services from '../../components/Serices/serices';

const About = () => {
  return (
    <>
      <Banner/>
      <Navbar/>
       <div className="about-page">
      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et facilisis justo. Integer dictum turpis euismod ante volutpat,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et facilisis justo. Integer dictum turpis euismod ante volutpat,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et facilisis justo. Integer dictum turpis euismod ante volutpat,
            Lorem 
            
            
            ipsum dolor sit amet, consectetur adipiscing elit. In et facilisis justo. Integer dictum turpis euismod ante volutpat,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et facilisis justo. Integer dictum turpis euismod ante volutpat,
             sed cursus magna dictum. Phasellus vehicula neque sed odio sollicitudin fermentum.
          </p>
        </div>
        <div className="story-image">
          <img src={pileofchoco} alt="Stack of chocolates" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stat-box">
          <h3>10.5k</h3>
          <p>Customers all over the world</p>
        </div>
        <div className="stat-box active">
          <h3>33k</h3>
          <p>Monthly sales of our product</p>
        </div>
        <div className="stat-box">
          <h3>45.5k</h3>
          <p>Products generated in our lab</p>
        </div>
        <div className="stat-box">
          <h3>25k</h3>
          <p>Unique reviews on our site</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        {/* Team members can be uncommented if needed */}
      </section>
    </div>
    <Services/>
    <Footer/>
    </>
  );
};

export default About;
