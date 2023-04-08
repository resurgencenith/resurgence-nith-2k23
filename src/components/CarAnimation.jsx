import React from 'react'
import { useEffect } from 'react';
import './CarAnimation.scss'

export default function CarAnimation() {
    useEffect(() => {
        const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
          };
          
          const stars = document.getElementById("stars");
          
          const render = () => {
            // Create stars ✨
            stars.innerHTML = "";
            const w = window.innerWidth;
            const h = window.innerHeight;
            const starCount = getRandomInt(42, 100);
          
            for (let i = 0; i < starCount; i++) {
              const star = document.createElement("div");
              star.classList.add("star");
              const x = getRandomInt(0, w);
              const y = getRandomInt(0, h);
              star.style.setProperty("--x", `${x}px`);
              star.style.setProperty("--y", `${y}px`);
              stars.appendChild(star);
            }
          };
          
          requestAnimationFrame(render);
          const volume = document.getElementById("volume");
          const audio = document.getElementById("synthwave-track");
          
          const volumeToggle = () => {
            if (volume.classList.contains("playing")) {
              volume.classList.remove("playing");
              audio.pause();
            } else {
              volume.classList.add("playing");
              audio.play();
            }
          };
          
          volume.addEventListener("pointerdown", () => volumeToggle());
          volume.addEventListener("keydown", (e) => {
            if (e.code === "Space" || e.code === "Enter") {
              volumeToggle();
            }
          });
          
          window.addEventListener("resize", () => requestAnimationFrame(render));
          
    })
    return (
        <div className='car_animation_root'>
          <div className="scene">
            <div className="delorean">
              <div className="mirror-left" />
              <div className="mirror-right" />
              <div className="delorean-cases">
                <div className="wheel-case-left" />
                <div className="wheel-case-right" />
                <div className="wheel-left" />
                <div className="wheel-right" />
              </div>
              <div className="delorean-top">
                <div className="top-lines-on-top" />
                <div className="top-lines-on-top right" />
                <div className="rear-window" />
                <div className="lights">
                  <div className="lights-frame" />
                  <div className="red-light-left" />
                  <div className="red-light-right" />
                  <div className="id-container">
                    <div className="id" />
                  </div>
                  <div className="red-reflection" />
                </div>
                <div className="bumper-light-reflection" />
                <div className="bumper-light-reflection right" />
              </div>
              <div className="bumper">
                <div className="bumper-reflection"> </div>
                <div className="bumper-logo" />
                <div className="bumper-hole-1" />
                <div className="bumper-hole-2" />
                <div className="bumper-sticker" />
                <div className="dashes" />
              </div>
              <div className="shadow" />
            </div>
            <div className="top">
              <div className="startails">
                <div className="startail-r" />
                <div className="startail-l" />
                <div className="startail-m" />
              </div>
              <div className="top-lines" />
              <div className="brand">
                <div className="triangle" />
                <div className="kode-text" />
              </div>
              <div className="sun" />
              <div className="palm small">
                <div className="trunk" />
                <div className="trunk-bottom" />
                <div className="leaf-1" />
                <div className="leaf-1-s" />
                <div className="leaf-2" />
                <div className="leaf-2-s" />
                <div className="leaf-3" />
                <div className="leaf-3-s" />
              </div>
              <div className="palm">
                <div className="trunk" />
                <div className="trunk-bottom" />
                <div className="leaf-1" />
                <div className="leaf-1-s" />
                <div className="leaf-2" />
                <div className="leaf-2-s" />
                <div className="leaf-3" />
                <div className="leaf-3-s" />
              </div>
            </div>
            <div className="bottom">
              <div className="m0" />
              <div className="m1" />
              <div className="m2" />
              <div className="bottom-overlay" />
            </div>
            <div id="stars" />
          </div>{/* license: https://assets.codepen.io/907471/synthesizer-synthwave-80s-110045-license.txt      */}<audio loop="loop" id="synthwave-track">
            <source src="https://assets.codepen.io/907471/synthwave-80s-110045.mp3" type="audio/mp3" />
          </audio><button id="volume"><svg className="play" xmlns="http://www.w3.org/2000/svg" width="21.25" height="17.5" viewBox="0 0 21.25 17.5">
              <path d="M1.25-11.25v7.5h5l5.625,5H13.75v-17.5H11.875l-5.625,5Zm16,6.75a3.745,3.745,0,0,0,1.5-3,3.745,3.745,0,0,0-1.5-3L16.125-9a1.87,1.87,0,0,1,.75,1.5,1.87,1.87,0,0,1-.75,1.5Zm2.25,3a7.491,7.491,0,0,0,3-6,7.491,7.491,0,0,0-3-6L18.375-12a5.615,5.615,0,0,1,2.25,4.5A5.615,5.615,0,0,1,18.375-3L19.5-1.5Z" transform="translate(-1.25 16.25)" fill="var(--labs-sys-color-volume)" />
            </svg><svg className="muted" xmlns="http://www.w3.org/2000/svg" width="24.996" height="19.992" viewBox="0 0 24.996 19.992">
              <path d="M1.891-16.922,1.148-17.5,0-16.016l.742.574L23.105,1.922l.742.574L25,1.016,24.254.441,21.238-1.9A7.48,7.48,0,0,0,23.75-7.5a7.491,7.491,0,0,0-3-6L19.625-12a5.615,5.615,0,0,1,2.25,4.5,5.611,5.611,0,0,1-2.152,4.426L15-6.742V-16.25H13.125l-4.836,4.3-6.4-4.969ZM2.5-11.25v7.5h5l5.625,5H15V-1.934L3.172-11.25H2.5Zm16,6.75a3.745,3.745,0,0,0,1.5-3,3.745,3.745,0,0,0-1.5-3L17.375-9a1.87,1.87,0,0,1,.75,1.5,1.87,1.87,0,0,1-.75,1.5Z" transform="translate(0 17.496)" fill="var(--labs-sys-color-volume)" />
            </svg></button>
        </div>
      );
    
}
