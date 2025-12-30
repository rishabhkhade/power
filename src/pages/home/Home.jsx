import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import hero1 from "../../assets/hero/20230202_165454.jpg";
import hero2 from "../../assets/hero/adb tata.jpg";
import hero3 from "../../assets/hero/shabana.jpg";
import Indicator from "../../components/indicator/Indicator";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ImPower } from "react-icons/im";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import solar2 from "../../assets/solar2.avif";
import MW_utility from "../../assets/projects_home/5_MW_utility_msedcl.jpg";
import Ashta_laxmi from "../../assets/projects_home/Ashta_laxmi.jpg";
import kk_protien from "../../assets/projects_home/kk_protien.jpg";
import nagpur from "../../assets/projects_home/nagpur.jpg";
import shivam_mill from "../../assets/projects_home/shivam_mill.jpg";
import QuoteSection from "../../components/before-footer/QuoteSection";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const data = [
    {
      img: MW_utility,
      heading: "5 MW utility msedcl",
      location: "Maharastra",
      no: "5",
    },
    {
      img: Ashta_laxmi,
      heading: "Ashta laxmi 490 kW",
      location: "Maharastra",
      no: "5",
    },
    {
      img: shivam_mill,
      heading: "Shivam Paper Mill 500 kw",
      location: "Maharastra",
      no: "5",
    },
    {
      img: solar2,
      heading: "Getwell hospital 82 kW",
      location: "Maharastra",
      no: "5",
    },
    {
      img: kk_protien,
      heading: "K. K. proteins 320 kW",
      location: "Maharastra",
      no: "5",
    },
    {
      img: nagpur,
      heading: "Nagpur Sortex 800 kW",
      location: "Maharastra",
      no: "5",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <div
        className="parent hero-parent"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container hero-cont">
          <div className="left">
            <h1>
              Empower Projects with <br />
              <span>ER Power's Solutions</span>
            </h1>
            <p>
              ER Power delivers tailored renewable energy solutions for global
              projects, emphasizing sustainability, innovation, and seamless
              power plant integration.
            </p>

            <Link className="btn">Consult Now</Link>
          </div>

          <div className="right">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-cont">
                <img src={hero1} alt="slide 1" />
              </SwiperSlide>
              <SwiperSlide className="swiper-cont">
                <img src={hero2} alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide className="swiper-cont">
                <img src={hero3} alt="slide 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* about */}
      <div
        class="parent about-parent-about"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="container about-cont-about">
          <div class="left">
            <Indicator text="About us" bg="var(--green)" textcolor="black" />
            <h3>Discover ER Power</h3>
            <p>
              Emppyreal Renewables & Power Pvt. Ltd. is an all-verticals
              renewable energy EPC company established in 2017. It is classified
              as a non-government company registered at the Registrar of
              Companies, Mumbai. From technological selection procurement,
              integration and maintenance, We are leading the way with
              engineered solutions that are both proven and practical as the
              world turns to alternatives in the face of high oil prices,
              depleting coal reserves, growing concerns over energy security,
              and the threat of climate change. We have made our mark in
              residential,commercial, governmental, and industrial
              establishments. We are present in more than 8 states and 2 union
              territories in India. We are about to set our footprints overseas
              with our first international project in the Maldives. We have a
              stronghold in central,western, and southern India, with more than
              17 MW of renewable projects successfully executed & about 72 MW
              work in progress.
            </p>
            <div class="btn" style={{ width: "fit-content" }}>
              Know more
            </div>
          </div>

          <div class="right ">
            <div className="bg-img-cover img-about"></div>
          </div>
        </div>
      </div>

      {/* vission and mission */}
      <div class="parent v-m-parent" data-aos="fade-up" data-aos-delay="300">
        <div class=" v-m-cont">
          <div class="left">
            <Indicator text="Our Vision" bg="var(--green)" textcolor="white" />
            <span>
              <IoSettingsOutline />
            </span>
            <p>
              To be the best performing and quality efficient Renewabe Energy
              and Power Company in the World.
            </p>
          </div>
          <div class="right">
            <Indicator
              text="Our Mission"
              bg="var(--blue)"
              textcolor="var(--blue)"
            />
            <span>
              <IoSettingsOutline />
            </span>
            <p>
              To build a world-class portfolio of renewable energy assets and be
              at the top globally.
            </p>
          </div>
        </div>
      </div>

      {/* our partner */}
      <div
        class="parent companies-name-parent"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div class="container companies-name-cont">
          <Indicator text="Our Partner" bg={"var(--green)"} />
          <h3>Our Associates</h3>

          <div class="logos-slider">
            <div class="logos-track">
              <div class="box box1"></div>
              <div class="box box2"></div>
              <div class="box box3"></div>
              <div class="box box4"></div>
              <div class="box box5"></div>

              <div class="box box1"></div>
              <div class="box box2"></div>
              <div class="box box3"></div>
              <div class="box box4"></div>
              <div class="box box5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}

      <div className="parent parent-testimonial">
        <div className="container cont-testimonial">
          <Indicator
            text="Our Testimonials"
            bg={"var(--green)"}
            textcolor={"white"}
          />
          <h3>Our Projects</h3>
          <div className="cards">
            {data.map((item, index) => (
              <div className="card">
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <h3>{item.heading}</h3>
                  <div className="details">
                    <div className="location">
                      <span>
                        <CiLocationOn />
                      </span>
                      <p>{item.location}</p>
                    </div>
                    <div className="capacity">
                      <span>
                        <ImPower />
                      </span>
                      <p>{item.no}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <QuoteSection />
    </>
  );
}

export default Home;
