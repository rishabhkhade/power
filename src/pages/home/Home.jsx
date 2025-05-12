import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import solar1 from '../../assets/solar1.avif'
import solar2 from '../../assets/solar2.avif'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
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
                delay: 250000,
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

    </>
  )
}

export default Home
