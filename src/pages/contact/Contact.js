import React, { useEffect } from "react";
import "./Contact.scss";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import PageTop from "../../components/page-top/PageTop";
import AOS from "aos";


function Contact() {


 useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);

  return (
    <>
    <PageTop text="Connect" subText="with us" />
      <div class="parent parent-contact" data-aos="fade-up" data-aos-delay="100">
        <div class="container cont-contact">
          <div class="left">
            <h2>
              Get <span>in Touch</span>
            </h2>
            <p style={{color:"black"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.
            </p>
            <div class="form">
              <p>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
              </p>
              <input type="text" placeholder="Email" />
              <textarea name="" id="" placeholder="Message"></textarea>

              <a className="btn" style={{ width: "fit-content" }}>
                Send Message
              </a>
            </div>
          </div>
          <div class="right">
            <div class="phone-wrap">
              <span>
                <MdLocalPhone />
              </span>
              <div class="phone">
                <span>Phone</span>
                <h5>+91 8010894591</h5>
              </div>
            </div>

            <div class="phone-wrap">
              <span>
                <FaEnvelope />
              </span>
              <div class="phone">
                <span>Mail</span>
                <h5>servicesupport@erpower.in</h5>
              </div>
            </div>

            <div class="phone-wrap">
              <span>
                <MdLocationOn />
              </span>
              <div class="phone">
                <span>Address</span>
                <h5>Plot no. 39A, 5th floor, Siddhivinayak Homes, Lakadganj, Nagpur- 440008</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
