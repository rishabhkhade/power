import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import solar1 from '../../assets/solar1.avif'
import solar2 from '../../assets/solar2.avif'
import Indicator from "../../components/indicator/Indicator";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ImPower } from "react-icons/im";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {

const data = [
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },
  {
    img:solar2,
    heading:"Lorem ipsum dolor sit amet consectetur.",
    location:"Maharastra",
    no:"5"
  },

]



  return (
    <>
      {/* Hero section */}
      <div className="parent hero-parent">
        <div className="container hero-cont">
          <div className="left">
            <h1>Empower Projects with <br />
              <span>ER Power's Solutions</span>
            </h1>
            <p>ER Power delivers tailored renewable energy solutions for global projects, emphasizing sustainability, innovation, and seamless power plant integration.</p>

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
              <SwiperSlide className='swiper-cont'>
                <img src={solar1} alt="slide 1" />
              </SwiperSlide>
              <SwiperSlide className='swiper-cont'>
                <img src={solar2} alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide className='swiper-cont'>
                <img src={solar1} alt="slide 3" />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>

      {/* about */}
      <div class="parent about-parent">
        <div class="container about-cont">
          <div class="left">
            <Indicator text="About us" bg="var(--green)" textcolor="white" />
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              quisquam maiores doloremque iusto voluptas modi, nam odit?
              Molestiae quaerat pariatur, nostrum, totam tempora, culpa
              reiciendis deleniti exercitationem officia accusamus quod
              consequatur ullam architecto est rem. Odit, cupiditate eum saepe
              vitae quibusdam unde. Adipisci dolores quas magnam aliquam quidem
              placeat similique.nostrum, totam tempora, culpa reiciendis
              deleniti exercitationem officia accusamus quod consequatur ullam
              architecto est rem. Odit, cupiditate eum saepe vitae quibusdam
              unde. Adipisci dolores quas magnam aliquam quidem placeat
              similique.
            </p>
            <div class="btn" style={{ width: "fit-content" }}>
              Know more
            </div>
          </div>

          <div class="right ">
            <div className='bg-img-cover img-about'></div>
          </div>
        </div>
      </div>

       {/* our partner */}
      <div class="parent companies-name-parent">
        <div class="container companies-name-cont">
          <Indicator text="Our Partner" bg={"var(--green)"} />
          <h3>Our Associates</h3>

          <div class="imgaes">
            <div class="box1 box"></div>
            <div class="box2 box"></div>
            <div class="box3 box"></div>
            <div class="box4 box"></div>
            <div class="box5 box"></div>
          </div>
        </div>
      </div>

      {/* vission and mission */}
      <div class="parent v-m-parent">
        <div class=" v-m-cont">
          <div class="left">
            <Indicator text="Our Vision" bg="var(--green)" textcolor="white" />
            <span>
              <IoSettingsOutline />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad
              minus quod sunt doloremque veritatis dolores, facilis voluptatibus
              sint deserunt dolor necessitatibus aperiam eum? Numquam fugit unde
              maiores quis delectus.
            </p>
          </div>
          <div class="right">
            <Indicator text="Our Mission" bg="var(--blue)" textcolor="var(--blue)" />
            <span>
              <IoSettingsOutline />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad
              minus quod sunt doloremque veritatis dolores, facilis voluptatibus
              sint deserunt dolor necessitatibus aperiam eum? Numquam fugit unde
              maiores quis delectus.
            </p>
          </div>
        </div>
      </div>

     


      {/* testimonial */}

      <div className="parent parent-testimonial">
        <div className="container cont-testimonial">
          <Indicator text="Our Testimonials" bg={"var(--green)"} />
          <h3>Our Projects</h3>
          <div className="cards">
            {
              data.map((item, index) => (
                <div className="card">
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>{item.heading}</h3>
                <div className="details">
                  <div className="location">
                    <span><CiLocationOn /></span>
                    <p>{item.location}</p>
                  </div>
                  <div className="capacity">
                    <span><ImPower /></span>
                    <p>{item.no}</p>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>

        </div>
      </div>



    </>
  )
}

export default Home
