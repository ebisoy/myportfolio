import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Erika from "../../../assets/hero/erika.png"; 

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, My name is Erika</h1>
        <p className={styles.description}>
        A dedicated student currently pursuing Computer Science at Pamantasan ng Lungsod ng Maynila.
        I am eager to apply my knowledge, leadership skills, and enthusiasm for learning in a professional setting. 
        </p>
        <a href="mailto:erikabisoy24@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={Erika}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
