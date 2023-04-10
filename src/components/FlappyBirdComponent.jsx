import React, { useEffect } from "react";
import config from "../App.config";
import FlappyBird from "../JSComponenets/flappy_bird/game";
import "./FlappyBirdComponent.css";
import FadeInFromLeft from "./AnimationComponents/FadeInFromLeft";
import FadeInFromRight from "./AnimationComponents/FadeInFromRight";

export default function FlappyBirdComponent() {
  useEffect(() => {
    FlappyBird();
  }, []);
  return (
    <div className="flappy_game_box">
      <FadeInFromLeft>
        <div className="flappy_game_text">
          <span className="glow_text">GAME ON</span>
          <div
            className="home_main_info glitch pt-3"
            data-text="For vibe, for games."
          >
            With the classic flappy bird!
            <br />
            {config.about}
          </div>
        </div>
      </FadeInFromLeft>
      <FadeInFromRight>
        <canvas id="canvas" width="276" height="414"></canvas>
      </FadeInFromRight>
    </div>
  );
}
