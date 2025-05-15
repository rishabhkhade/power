import React from "react";
import "./Services.scss";
import img from "../../assets/solar1.avif"
import Indicator from "../../components/indicator/Indicator";

const servicesData = [
    {
        title: "Lorem, ipsum 1.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
        image: img
    },
    {
        title: "Lorem, ipsum 2.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis nulla explicabo quos hic illum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
        image: img,
    },
    {
        title: "Lorem, ipsum 3.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis cumque repudiandae eum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
        image: img,
    },
    {
        title: "Lorem, ipsum 3.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis cumque repudiandae eum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
        image: img,
    },
];

function Services() {
    return (
        <>
            <>
                <div className="services-header">
                    <Indicator text="Our Services" bg="var(--green)" />
                    <h3><span>What do</span> <span className="highlight">we Offer</span></h3>
                </div>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className={`parent-service ${index % 2 === 1 ? "grey-bg" : ""}`}
                    >
                        <div className={`container cont-service ${index % 2 === 1 ? "reverse" : ""}`}>
                            <div className="left-right">
                                <div className="left">
                                    <h3>
                                        <span>Solar</span> <span className="highlight">Energy</span>
                                    </h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className="right">
                                    <img src={service.image} alt={service.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        </>
    );
}

export default Services;
