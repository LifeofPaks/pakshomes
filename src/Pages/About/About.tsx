import React from "react";
import "./About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <>
    <div className="about">
      <Navbar />

      <div className="heroSec">
        <img className="aboutImg"
          src="https://images.unsplash.com/photo-1551783841-0271a5f7c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2863&q=80"
          alt="hero-img"
        />
      </div>

      <div className="content">
        <h1>"An Unmatched Real Estate Experience"</h1>
        <p>
          Nigeria is a great place to live and work, which is why{" "}
          <span>paks homes</span> chose to call it home. We have built a solid
          foundation of clients in this community through our strong connection
          to the Nigerian market, attention to details, and commitment to always
          put our client’s needs first. By understanding what you are looking
          for we tend to find you the superior offer and home that fits your
          superior thinking.
        </p>
        <p>
          The team of Paks Homes have been active members in the realty market
          for the past 10 years and their knowledge in the Banking and Finance
          field complement your prospects in a successful investment.
        </p>
        <p>
          To make this happen, we are in constant hunt for new projects, from
          the biggest to the smallest construction companies for you to make a
          confident decision, and we will be there along the way.
        </p>

        <img className="aboutImg"
          src="https://images.unsplash.com/photo-1610558751153-154582773d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          alt="img"
        />

<div className="purpose">
        <div className="item">
          <h2>Our Vision</h2>
          <p>
            We take great pride in being over just another real estate agency.
            We aim to develop long-lasting relationships with our clients by
            offering exceptional services and meeting customers' maximum
            satisfaction. Our goal is to earn your trust and ensure you're
            comfortable with the process of buying a property in Turkey from
            start to end.
          </p>
        </div>

        <div className="item">
          <h2>Our Mission</h2>
          <p>
            At Paks Homes, clients are our top priority. We are dedicated to
            supplying you with the easiest experience finding the proper Home!
            we've got a team of property consultants, who are available for you
            for any needs that may arise.
          </p>
        </div>

        <div className="item">
          <h2>Our Goal</h2>
          <p>
            Our goal is to be some extent of reference in everything associated
            with real estate in Nigeria. We believe that if you're not left with
            a tremendous experience, we haven’t done our job. We don’t measure
            success through achievements or awards but through the satisfaction
            of our clients.{" "}
          </p>
        </div>
      </div>
      </div>

    </div>
    <Footer/>
    </>
    
  );
};

export default About;
