import styles from '../styles/Navbar.module.css';

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
             <i className="fa-solid fa-caret-down"></i>
            <ul>
            <li> <Link  href='/' >Home</Link></li>
              <li> <Link  href='/About'>About</Link></li>
              <li> <Link href='/Services'>Services</Link> </li>
              <li> <Link href='/'>Hire Me</Link> </li>
            </ul>
          </li>
        </ul>  
  </div>
  </>
  );
};
export default Navbar;
