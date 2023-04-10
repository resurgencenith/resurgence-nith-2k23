import React from "react";
import "./WhatDoWeDo.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { fadeIn, textVariant } from "../utils/motion.js";
import config from "../App.config";
import images from "../assets/images/images";


function Service({ index, title, icon }) {
  
  return (
    <Tilt className="card">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="card-inner"
        >
          <img
            src={ images[index] }
            alt="web-development"
            className="card_image"
          />

          <h3 className="card_title">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default function WhatDoWeDo() {
  return (
    <div className="whatdowedo">
      <motion.div variants={textVariant()}>
        <div className="text-overview">Overview.</div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="whatdowedo-text"
      >
        {config.whatDoWeDoText}
      </motion.p>

      <div className="tiles">
        {config.whatDoWeDo.map((service, index) => {
          return <Service key={service.title} index={index} {...service} />;
        })}
      </div>
    </div>
  );
}
