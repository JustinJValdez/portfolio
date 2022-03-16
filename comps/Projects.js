import styles from '../styles/Projects.module.css';

import Image from 'next/image';



const Projects = () => {
  return ( 
    <section className={styles.projects}>
      <div className={styles.item}>
      <Image src='/fringe.png' width={325} height={225} />
        <p>Fringe</p>
      </div>
      <div className={styles.item}>
      <Image src='/DD.png' width={325} height={225} />
       <p>Devil's Details</p> 
      </div>
      <div className={styles.item}>
      <Image src='/scroll.png' width={325} height={225} />
       <p>Counter</p> 
      </div>
      <div className={styles.item}>
      <Image src='/Landing.png' width={325} height={225} />
       <p>Card Generator</p> 
      </div>
      <div className={styles.item}>
      <Image src='/Landing.png' width={325} height={225} />
       <p>Evite site</p> 
      </div>
      <div className={styles.item}>
      <Image src='/DD.png' width={325} height={225} />
       <p>This Portfolio</p> 
      </div>

    </section>
   );
}
 
export default Projects;