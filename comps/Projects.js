import styles from '../styles/Projects.module.css';

import Image from 'next/image';



const Projects = () => {
  return ( 
    <section className={styles.projects}>
      <div className={styles.item}>
      <Image src='/fringe.png' width={325} height={225} />
        Fringe
      </div>
      <div className={styles.item}>
      <Image src='/DD.png' width={325} height={225} />
        DD
      </div>
      <div className={styles.item}>
      <Image src='/scroll.png' width={325} height={225} />
        Counter
      </div>
      <div className={styles.item}>
      <Image src='/Landing.png' width={325} height={225} />
        Card Generator
      </div>
      <div className={styles.item}>
      <Image src='/Landing.png' width={325} height={225} />
        E-vite site
      </div>
      <div className={styles.item}>
      <Image src='/DD.png' width={325} height={225} />
        This Portfolio
      </div>

    </section>
   );
}
 
export default Projects;