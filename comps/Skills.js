import Image from 'next/image';

import styles from '../styles/Skills.module.css'



const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>I am proficient developer using the following skills:</h1>
      
      {/*<Image src='/logo_css.png' width={225} height={225} />*/ }
      <i className="fa-brands fa-css3-alt"></i>
      
      {/* <Image src='/logo_html.png' width={225} height={225} />*/}
      <i className="fa-brands fa-html5"></i>

      {/* <Image src='/logo_js.png' width={225} height={225} />*/}
      <i className="fa-brands fa-js-square"></i>

      {/*<Image src='/logo_react.png' width={225} height={225} /> */}
      <i className="fa-brands fa-react"></i>
      {/* */}
      <Image src='/logo_next.png' width={225} height={225} />
      
      {/*<Image src='/logo_node.png' width={225} height={225} />*/ }
      <i className="fa-brands fa-node"></i>
      <Image src='/logo_jq.png' width={225} height={225}/>
      
    </div>
    );
}
 
export default Skills;