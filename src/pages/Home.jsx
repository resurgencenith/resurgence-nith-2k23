import React from "react";
import Navbar from "../components/Navbar";
import GlobeAnimation from "../components/GlobeAnimation.jsx";
import "./Home.scss";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";
import TetrisComponent from "../components/TetrisComponent";
import FlappyBirdComponent from "../components/FlappyBirdComponent";
import ContactUs from "../components/ContactUs";
import WhoAreWe from "../components/WhoAreWe";
import WhatDoWeDo from "../components/WhatDoWeDo";
import OurVision from "../components/OurVision";
import HorizontalLine from "../components/HorizontalLine";
import DynamicIsland from "../components/DynamicIsland";
import LoadingScreen from "../components/LoadingScreen";
import KrotosImage from "../components/KrotosImage.jsx";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      {/* <LoadingScreen/> */}

      {/* <DynamicIsland/> */}
      <KrotosImage/>
      <Navbar />
      <div className="home">
        <div className="home_main">
          <div className="home_hero">
            <div className="home_main_title">
              <div className="home_main_text text_main_size">
                <span className="flicker text_main_size">Res</span>
                <span>urg </span>
                <span className="fast-flicker text_main_size">ence</span>
              </div>
              <div
                className="home_main_info glitch"
                data-text="For vibe, for games."
              >
                For vibe, for games.
              </div>
            </div>
            <div className="krotos">
              
            </div>
          </div>
          <div className="globe_position">
            <GlobeAnimation />
          </div>
        </div>
        <HorizontalLine/>

        <WhatDoWeDo />
        <HorizontalLine />

        <OurVision />
        <HorizontalLine />

        <FlappyBirdComponent />
        <HorizontalLine />

        <ContactUs />
        <HorizontalLine />

        <Footer />
      </div>
    </>
  );
}
