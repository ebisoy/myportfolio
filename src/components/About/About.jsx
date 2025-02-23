import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import erikaImage from "../../../assets/about/erika1.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png"; 


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
           src={erikaImage}
           alt="Me sitting with a laptop"
           className={styles.erika}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={cursorIcon} alt="Cursor icon" /> 
            <div className={styles.aboutItemText}>
              <h3>Internal Relations (Google Developer Student Club) </h3>
              <p>
                Enhance collaboration between partner organizations by fostering connections through networking activities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Project Manager in Software Engineering Subject</h3>
              <p>
              Led a team of 4 students in planning, executing, and completing a HR Automation Process Module in PLM.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>SK Kagawad (Youth Council Member) </h3>
              <p>
              Organized events, facilitated community programs, and advocated for youth interests.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
