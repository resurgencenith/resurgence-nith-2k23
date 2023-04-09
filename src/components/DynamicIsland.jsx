import React, { useEffect } from "react";
import "./DynamicIsland.scss";
import { Link } from "react-router-dom";

export default function DynamicIsland({ navArrayIds = [] }) {
  useEffect(() => {
    let init = document.getElementById("init");
    let island = document.getElementById("island");
    console.clear()
    window.addEventListener('scroll', (e)=>{
        console.log(window.scrollY)

        if(window.scrollY>100){
            init.style.display = "none";
        }
    });
  });
  return (
    <div className="dynamic-island">
      <div id="init">
        <svg
          width={32}
          height={26}
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dorknamic-island__StyledHex-sc-144mjgh-3 kIZkoq"
          style={{ display: "block" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.83961 20.0323C6.9791 20.1043 7.13588 20.1437 7.29827 20.1437L16.7017 20.1437C17.059 20.1437 17.3891 19.9531 17.5677 19.6437L22.2694 11.5001C22.4481 11.1907 22.4481 10.8095 22.2694 10.5001L17.5677 2.35644C17.4706 2.18814 17.3286 2.05499 17.1617 1.96855L6.83961 20.0323ZM5.56622 1.85645C5.92349 1.23764 6.58374 0.856445 7.29827 0.856445H16.7017C17.4162 0.856445 18.0765 1.23764 18.4338 1.85644L23.1355 10.0001C23.4927 10.6189 23.4927 11.3812 23.1355 12.0001L18.4338 20.1437C18.0765 20.7625 17.4162 21.1437 16.7017 21.1437H7.29827C6.58374 21.1437 5.92349 20.7625 5.56622 20.1437L0.864507 12.0001C0.507241 11.3812 0.507241 10.6189 0.864507 10.0001L5.56622 1.85645Z"
            fill="currentColor"
          />
        </svg>

        <div className="init_text">INIT</div>
        <div class="dot-falling"></div>
        <div className="init_lens">
          <div className="lens_wrapper">
            <div class="lens">
              <div class="lens_1">
                <div class="lens_2">
                  <div class="lens_3">
                    <div class="lens_4">
                      <div class="lens_5">
                        <div class="lens_6">
                          <div class="lens_7"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="island">
        <div className="island_nav">
          <li>
            <Link to="/" className="island_nav_item">
              <div className="island_nav_item">Link</div>
            </Link>
          </li>
          <li>
            <Link to="/" className="island_nav_item">
              <div className="island_nav_item">Link</div>
            </Link>
          </li>
          <li>
            <Link to="/" className="island_nav_item">
              <div>Link</div>
            </Link>
          </li>
        </div>
        <div className="island_lens_wrapper">
          <div className="lens_wrapper_island">
            <div class="lens">
              <div class="lens_1">
                <div class="lens_2">
                  <div class="lens_3">
                    <div class="lens_4">
                      <div class="lens_5">
                        <div class="lens_6">
                          <div class="lens_7"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
