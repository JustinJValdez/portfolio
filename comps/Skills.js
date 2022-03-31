import Image from 'next/image';

import styles from '../styles/Skills.module.css'



const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.text}>
        <h1>I'm a frontend developer utilizing the following skills:</h1>
      </div>
      
      <div className={styles.logos}>
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>  
        <i className="fa-brands fa-js-square"></i>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-node"></i>
      </div>
    </div>
    );
}
 
export default Skills;