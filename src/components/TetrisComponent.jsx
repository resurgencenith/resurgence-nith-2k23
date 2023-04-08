import React, { useEffect } from "react";
import Tetris from "../JSComponenets/Tetris/Tetris";

export default function TetrisComponent() {
    useEffect(()=>{
        Tetris()
    })
  return (
    <div>
      <h4 id="status">play the game</h4>
      <button id="instructions">Instructions</button>
      {/*Button for instructions */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">×</span>
          <p>
            ⬅️ Left Arrow: moves the block left
            <br />
            <br /> ➡️ Right Arrow: moves the block right
            <br />
            <br />
            ⬇️ Down Arrow: Accelerates the block's fall
            <br />
            <br />
            A &amp; D Keys: Rotate the block <br />
            <br /> Score as many points as possible by clearing horizontal lines
            of Blocks. <br />
            <br /> You must rotate, move, and drop the falling Tetriminos inside
            the playing field. <br />
            <br />
            Lines are cleared when they are filled with Blocks and have no empty
            spaces.
          </p>
        </div>
      </div>
      <div id="button-container">
        <button id="start">Start</button>
        <h3>
          Score:<span id="score">0</span>
        </h3>
        <button id="reset">Reset</button>
      </div>
      <canvas id="tetris" width={240} height={400}></canvas>
    </div>
  );
}
