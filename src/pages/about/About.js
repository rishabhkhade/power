import React from "react";
import "./About.scss";
import Indicator from "../../components/indicator/Indicator";
import PageTop from "../../components/page-top/PageTop";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import rohit from "../../assets/rohit.jpg"
import piyush from "../../assets/piyush.jpg"
import AOS from "aos";
import { useEffect } from "react";



function About() {

 useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);


  return (
    <>
    <PageTop text="About" subText="Us" />
      <div class="parent about-parent" data-aos="fade-up" data-aos-delay="100">
        <div class="container about-cont">
          <div class="left">
            <Indicator text="About us" bg="var(--green)" textcolor="var(--blue)" />

            <h3>Discover ER Power</h3>
            <p>
             Emppyreal Renewables & Power Pvt. Ltd. is an all-verticals renewable energy EPC company established in 2017. It is classified as a non-government company registered at the Registrar of Companies, Mumbai. From technological selection procurement, integration and maintenance, We are leading the way with engineered solutions that are both proven and practical as the world turns to alternatives in the face of high oil prices, depleting coal reserves, growing concerns over energy security, and the threat of climate change. We have made our mark in residential,commercial, governmental, and industrial establishments. We are present in more than 8 states and 2 union territories in India. We are about to set our footprints overseas with our first international project in the Maldives. We have a stronghold in central,western, and southern India, with more than 17 MW of renewable projects successfully executed & about 72 MW work in progress.
            </p>
            <div class="btn" style={{ width: "fit-content" }}>
              Know more
            </div>
          </div>

          <div class="right bg-img-cover"></div>
        </div>
      </div>

    



      <div class="parent owner-parent bg-img-cover" data-aos="fade-up" data-aos-delay="200">
        <div class="container owner-cont">
          <div class="box-wrapper">
            <div class="left">
              <h3>Mr. Rohit Shaniware</h3>
              <p>
                An MBA graduate who supervises the company's sales, marketing, and finance with a strategic acumen for continual growth and holds vast business expertise. His roles and responsibilities include identifying, developing, and directing the implementation of business strategies.
              </p>
              <Link class="button">
                <span><FaLinkedin /></span>
                <p>Linkdin</p>
              </Link>
            </div>
            <div class="right">
              <img src={rohit} alt="" />
            </div>
          </div>

          <div class="box-wrapper box2">
            <div class="left">
              <h3>Mr. Piyush Dahule</h3>
              <p>
                An Electrical Engineer who supervises the technology selections, installation & procurement having responsibilities include strategic technical direction, and of project execution. He has extensive experience in electrical maintenance, line installation up to 66 kV.
              </p>
             <Link class="button">
                <span><FaLinkedin /></span>
                <p>Linkdin</p>
              </Link>
            </div>
            <div class="right">
              <img src={piyush} alt="" />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default About;
