import React from "react";
import styles from "../style/main.module.css";
import Hero from "./Hero";

const Main = () => {
  return (
    <>
      <div className={styles.main_section}>
        <Hero />
      </div>
    </>
  );
};

export default Main;
