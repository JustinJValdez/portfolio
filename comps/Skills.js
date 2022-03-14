import Image from 'next/image';

import styles from '../styles/Skills.module.css'



const Skills = () => {
  return (
    <div className={styles.skills}>
      
      <Image src='/logo_css.png' width={225} height={225}/>
      <Image src='/logo_html.png' width={225} height={225}/>
      <Image src='/logo_js.png' width={225} height={225} />
      <Image src='/logo_react.png' width={225} height={225}/>
      <Image src='/logo_next.png' width={225} height={225}/>
      <Image src='/logo_node.png' width={225} height={225} />
      <Image src='/logo_jq.png' width={225} height={225}/>
      
    </div>
    );
}
 
export default Skills;