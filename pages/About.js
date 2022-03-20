import styles from '../styles/About.module.css';
import Image from 'next/image'

const About = () => {
  return ( 
    <>
      <div className={styles.about}>
        <Image src='/me.jpg'  height={400} width={600} />
      <h1 >About me:</h1>
      <p>
        Nisi nostrud cupidatat voluptate nostrud. Fugiat et dolor pariatur quis laborum aliqua velit laboris ipsum. Aliquip deserunt nulla consequat esse Lorem et exercitation non qui officia sint dolor duis ut. Irure laborum culpa mollit sunt anim.
      </p>
      </div>
    
    </>
    
   );
}
 
export default About;