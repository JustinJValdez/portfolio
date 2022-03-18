import Footer from "./Footer";
import Navbar from "../comps/Navbar";

import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {
  return ( 
    <>
      <Navbar />
      <div className={styles.wrapper}>
          {children}
        <Footer />
      </div>
    </>
   );
}
 
export default Layout;