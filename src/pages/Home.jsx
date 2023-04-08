import React from "react";
import Navbar from "../components/Navbar";
import GlobeAnimation from "../components/GlobeAnimation.jsx";
import "./Home.scss";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <div className="home">
        <Navbar />

        <div className="home_main">
          <div className="home_main_title">
            <div className="home_main_text">
              <span className="flicker">Res</span>urg{" "}
              <span className="fast-flicker">ence</span>
            </div>
            <div
              className="home_main_info glitch"
              data-text="For vibe, for games."
            >
              For vibe, for games.
            </div>
          </div>

          {/* <CarAnimation/> */}
          


          <div className="globe_position">
            <GlobeAnimation />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
