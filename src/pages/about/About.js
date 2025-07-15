import React from "react";
import "./About.scss";
import Indicator from "../../components/indicator/Indicator";
import { IoSettingsOutline } from "react-icons/io5";


function About() {
  return (
    <>
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

          <div class="right"></div>
        </div>
      </div>

      <div class="parent v-m-parent">
        <div class=" v-m-cont">
          <div class="left">
            <Indicator text="Vission" />
            <span>
              {" "}
              <IoSettingsOutline />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad
              minus quod sunt doloremque veritatis dolores, facilis voluptatibus
              sint deserunt dolor necessitatibus aperiam eum
            </p>
          </div>
          <div class="right">
            <Indicator text="Mission" bg="green" />
            <span>
              {" "}
              <IoSettingsOutline />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad
              minus quod sunt doloremque veritatis dolores, facilis voluptatibus
              sint deserunt dolor necessitatibus aperiam eum
            </p>
          </div>
        </div>
      </div>



      <div class="parent owner-parent">
        <div class="container owner-cont">
          <div class="box-wrapper">
            <div class="left">
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae in placeat distinctio. Quis dolorem dolore aliquid
                sunt quidem fugit corporis deserunt animi soluta veritatis
                suscipit, nihil similique voluptas labore sed.
                sunt quidem fugit corporis deserunt animi soluta veritatis
                suscipit, nihil similique voluptas labore sed.
              </p>
              <div class="button">
                <span>logo</span>
                <p>Submit</p>
              </div>
            </div>
            <div class="right">
              <img src="" alt="" />
            </div>
          </div>

          <div class="box-wrapper box2">
            <div class="left">
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae in placeat distinctio. Quis dolorem dolore aliquid
                sunt quidem fugit corporis deserunt animi soluta veritatis
                suscipit, nihil similique voluptas labore sed.
                sunt quidem fugit corporis deserunt animi soluta veritatis
                suscipit, nihil similique voluptas labore sed.
              </p>
              <div class="button">
                <span>logo</span>
                <p>Submit</p>
              </div>
            </div>
            <div class="right">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default About;
