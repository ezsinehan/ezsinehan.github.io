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
          />
        </h2>
        <p className="text-lg">
          A dedicated computer science scholar with a passion for creating
          boundary-pushing solutions, I thrive on solving complex problems and
          am eager to bring my growing expertise in software development to an
          impactful field. Whether it’s fixing a bug, analyzing data,
          implementing a new feature, or writing documentation, I’m all in. I’m
          ready to leverage my skills and energy into an internship—contact me
          through my socials below.
        </p>
        <Socials />
      </section>
      <Technologies />
      <Work />
    </div>
  );
};

export default Intro;
