import styles from '../styles/Navbar.module.css'

import Link from "next/link";


const Navbar = () => {
  return (
  <>
    <nav className={styles.nav}>
      <ul>
          <li> About </li>
          <li> Skills </li>
          <li> Projects </li>
          <li> Contact  </li>
      </ul>
    </nav>
  </>
  );
};
export default Navbar;
