import React from 'react'
import "./Projects.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import solar1 from '../../assets/solar1.avif'
import solar2 from '../../assets/solar2.avif'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PageTop from '../../components/page-top/PageTop';
import MW_utility from "../../assets/MW_utility.jpeg"
import Ashta_laxmi from "../../assets/Ashta_laxmi.jpg"
import kk_protien from "../../assets/kk_protien.jpg"
import nagpur from "../../assets/nagpur.jpg"
import shivam_mill from "../../assets/shivam_mill.jpg"


function Projects() {
  return (
    <>
      <PageTop text="Our" subText="Projects" />
      <div className="parent project-parent">
        <div className="container project-cont">

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
              <div className="slide-img-container">
                <img src={MW_utility} alt="slide 1" />
                <div className="slide-gradient"></div>
                <div className="slide-title">5 MW utility msedcl</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>
              <div className="slide-img-container">
                <img src={Ashta_laxmi} alt="slide 2" />
                <div className="slide-gradient"></div>
                <div className="slide-title">Ashta laxmi 490 kW</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>
              <div className="slide-img-container">
                <img src={kk_protien} alt="slide 3" />
                <div className="slide-gradient"></div>
                <div className="slide-title">K. K. proteins 320 kW</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>
              <div className="slide-img-container">
                <img src={nagpur} alt="slide 3" />
                <div className="slide-gradient"></div>
                <div className="slide-title">Nagpur Sortex 800 kW</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>
              <div className="slide-img-container">
                <img src={shivam_mill} alt="slide 3" />
                <div className="slide-gradient"></div>
                <div className="slide-title">Shivam Paper Mill 500 kw</div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </div>

    </>
  )
}

export default Projects
