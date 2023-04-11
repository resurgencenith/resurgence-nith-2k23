import React from "react";
import "./Team.css";
import Navbar from "../components/Navbar";
import BackgroundParticles from "../components/BackgroundParticles";
import TeamCard from "../components/TeamCard";
import config from "../App.config";
import FadeInFromBottom from "../components/AnimationComponents/FadeInFromTop";
import FadeInFromLeft from "../components/AnimationComponents/FadeInFromLeft";
import FadeInFromRight from "../components/AnimationComponents/FadeInFromRight";
import HorizontalLine from "../components/HorizontalLine";

export default function Team() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />

      <div className="team">
        <FadeInFromBottom>
          <div className="sec">
            <TeamCard member={config.team.final_year.secretory} />
          </div>
        </FadeInFromBottom>
        <HorizontalLine />

        <div className="cc">
          <FadeInFromLeft>
            <div className="cc_inner">
              <TeamCard member={config.team.third_year.cc[0]} />
            </div>
          </FadeInFromLeft>
          <FadeInFromRight>
            <div className="cc_inner">
              <TeamCard member={config.team.third_year.cc[1]} />
            </div>
          </FadeInFromRight>
        </div>
        <HorizontalLine/>

        

      </div>
    </>
  );
}
