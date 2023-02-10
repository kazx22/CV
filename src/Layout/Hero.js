import React from "react";
import styles from "../style/hero.module.css";
import spinner from "../assets/mob.gif";
const Hero = () => {
  return (
    <>
      <section className={styles.hero_section}>
        <h1 className={styles.heading}>Hello.</h1>
        <p className={styles.name}>My name is Kazi Alif Haider</p>
        <p className={styles.description}>
          I am a freelance software developer residing in Bangladesh. I use
          Unique solution to create functional websites that increase conversion
          rates and client requirements for businesses. I'm passionate about
          using consumer perceptions to support an interaction science-based
          approach.
        </p>

        <p className={styles.description}>
          I turn ideas into pixel-perfect websites with intricate animations.
          The entire process - conception, design, and development - from a
          single source.You can check out my work or hire me on{" "}
          <span>
            <a href="/">fiverr</a>
          </span>{" "}
          and{" "}
          <span>
            <a href="/">upwork</a>
          </span>
          .
        </p>
      </section>
      <img src={spinner} alt="" />
    </>
  );
};

export default Hero;
