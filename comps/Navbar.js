import styles from '../styles/Navbar.module.css';

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
            <a href='#'> <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li> <a href='#'>About</a> </li>
              <li> <a href='#'>Skills</a> </li>
              <li> <a href='#'>Projects</a> </li>
              <li> <a href='#'>Contact</a> </li>
            </ul>
          </li>
        </ul>  
  </div>
  </>
  );
};
export default Navbar;
