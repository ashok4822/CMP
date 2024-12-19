import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={assets.college_photo} alt="" />
      </div>
      <div className="policybar-hero">
        <button>INTRODUCING-CHMSC</button>
        <button>ADMISSION POLICY</button>
        <button>APPLY NOW</button>
      </div>
      <div className="description-hero">
        <p>Arya Groups & Technology Engineering College</p>
      </div>
      <div className="faculties-hero">
        <div className="heading">
          <h3>FACULTIES</h3>
          <p>
            Arya Group Technology & Engineering College and learning to
            development
          </p>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1325855541/photo/mid-adult-professor-teaching-a-lecture-from-desktop-pc-at-computer-lab.jpg?s=612x612&w=0&k=20&c=WC2F48BNgWAcSLIFBJwMq8Yutr_xVjb9CClo1aX5T3Q="
            alt=""
          />
          <img src="https://media.istockphoto.com/id/1212693295/photo/young-female-trainer-giving-presentation-to-adult-audience-in-computer-class.jpg?s=612x612&w=0&k=20&c=fHpimq290gZ5Q2G4h9TbvL3WyF86saE5diCBt8qJLTQ=" alt="" />
          <img src="https://media.istockphoto.com/id/1476972345/photo/male-public-speaker-giving-a-speech-in-front-of-crowd-in-convention-center.jpg?s=612x612&w=0&k=20&c=JLTswT0Ky_XofjLHw5je79Xo2y94ZTBfKUQhmXaD3Kw=" alt="" />
          <img src="https://media.istockphoto.com/id/1166978137/photo/male-speaker-giving-presentation-in-hall-at-university-workshop.jpg?s=612x612&w=0&k=20&c=OC4wH_PMhXIurkHbBf1IDVD8s2TVct90HV17l6gnz_w=" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
