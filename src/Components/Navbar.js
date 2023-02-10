import React from "react";
import styles from "../style/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        {/* <img src="" alt="" /> */}
        <div className={styles.nav_logo_container}>
          <a href="/" className={styles.nav_logo}>
            Kazi Alif
          </a>
        </div>
        <div className={styles.nav_items}>
          <a href="/" className={styles.item}>
            <span className={styles.item_no}>01.</span> Home
          </a>
          <a href="/" className={styles.item}>
            <span className={styles.item_no}>02.</span> Work
          </a>
          <a href="/" className={styles.item}>
            <span className={styles.item_no}>03.</span> Experience
          </a>
          <a href="/" className={styles.item}>
            <span className={styles.item_no}>04.</span> Contact
          </a>
          <button className={`${styles.btn_nav} ${styles.item}`}>Resume</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// <li>
// <a href="/"></a>
// </li>
// <li>
// <a href="/"></a>
// </li>
// <li>
// <a href="/"></a>
// </li>
// <li>
// <a href="/"></a>
// </li>
