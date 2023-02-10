import React from "react";
import styles from "../style/lo.module.css";
import { FaDiscord, FaTwitter, FaTiktok } from "react-icons/fa";
const LeftOrientation = () => {
  return (
    <>
      <div className={styles.left_container}>
        <ul className={styles.link_list}>
          <li>
            <a href="/" className={styles.link}>
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="/" className={styles.link}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/" className={styles.link}>
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftOrientation;
