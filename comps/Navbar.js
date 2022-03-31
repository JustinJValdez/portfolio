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
            <li> <Link  href='/' ><a>Home</a></Link></li>
              <li> <Link  href='/About'><a>About</a></Link></li>
              <li> <Link href='/Services'><a>Services</a></Link> </li>
              <li> <Link a href='/Contact'><a>Hire Me</a></Link> </li>
            </ul>
          </li>
        </ul>  
  </div>
  </>
  );
};
export default Navbar;
