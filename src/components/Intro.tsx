"use client";

import React from "react";
import TypewriterText from "./Typewriter";
import Socials from "./Socials";
import Technologies from "./Technologies";
import Work from "./Work";

const Intro = () => {
  return (
    <div className="container mx-auto p-8 mt-5">
      <section className="p-6 font-mono">
        <h2 className="text-3xl font-bold mb-4 text-white mt-10">
          <TypewriterText
            texts={[
              "Hi, Im Sinehan",
              "Good day! I'm known as Sinehan",
              "Greetings, I'm Sinehan",
              "Howdy, Sinehan here",
              "Salutations, I'm Sinehan",
              "Hiya, I'm Sinehan",
              "Yo, Sinehan here",
              "If you didn't know Im Sinehan",
            ]}
            pause={1500}
          />
        </h2>
        <p className="text-lg">
          I'm 19 year old student studying computer science. I live to grow
          through challenges each of which will allow me to add to my toolbox. I
          hope to one day create something I am proud to call my life's work. If
          you'd like to get in contact my socials are below.
        </p>
        <Socials />
      </section>
      <Technologies />
      <Work />
    </div>
  );
};

export default Intro;
