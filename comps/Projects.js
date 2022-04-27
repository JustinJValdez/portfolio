import styles from '../styles/Projects.module.css';

import Image from 'next/image';



const Projects = () => {
  return ( 
    <section className={styles.projects}>
      <div>
        <h2>My Recent Work</h2>
      </div>
      <div className={styles.items}>

        <div className={styles.work}>
          
          <Image src='/fringe.png' width={425} height={275} alt='Fringe website image'/>   
          <div className={styles.text}>
          
          <h3><a href='https://www.fringecosmetology.com/' target="_blank">Fringe Cosmetology Consulting</a></h3>
            <p>I designed and built this responsive website for a small business that focuses on helping professionals in the beatuty field improve their skill sets via training and workshops.  </p>
            <p>HTML | CSS | JS | Bootstrap | Netlify</p>
          </div>
        </div>

        <div className={styles.work}>
          
          <Image src='/DD.png' width={425} height={275} alt='Devils details website image' />
          <div className={styles.text}>
          <h3><a href='https://www.devilsdetailsgb.com/' target="_blank">Devil's Details</a></h3> 
            <p>I designed and built this responsive website for a small business that focuses an auto detailer that wanted to showcase his work, his background and a way for potential customers to connect with him. </p>
            <p>HTML | CSS | JS | Bootstrap | Netlify</p>
          </div>                  
        </div>

        <div className={styles.work}>
          <Image src='/counter.png' width={425} height={275} alt='counter website image'  />
          <div className={styles.text}>
          <h3><a href="https://basicjscounter.netlify.app/" target="_blank">Click Counter</a></h3> 
          <p>This web app was designed as a simple click and count tracker.</p>
          <p>HTML | CSS | JS</p>
          </div>       
        </div>

        <div className={styles.work}>
          <Image src='/card.png' width={425} height={275} alt='Card generator website image' />
          <div className={styles.text}>
          <h3><a href="https://randomplayingcard.netlify.app/" target="_blank">Random Playing Card Generator</a></h3> 
          <p>This web app was designed to have a simple click randomly generate a playing card.</p>
          <p>HTML | CSS | JS</p>
          </div>
        </div>

        <div className={styles.work}>
          <Image src='/Bday.png' width={425} height={275} alt='Custom e-vite website image' />
          <div className={styles.text}>
          <h3> <a href="https://zandersbirthday.netlify.app/" target="_blank">Evite site</a></h3> 
          <p>This website was designed as an e-vite for my son's first birthday party. It allowed invited guests to RSVP with a total count for their party.</p>
          <p>HTML | CSS | JS</p>
          </div>      
        </div>

        <div className={styles.work}>
          <Image src='/scroll.png' width={425} height={275} alt='Home page of this website image' />
          <div className={styles.text}>
              <h3><a href="" target="_blank">Smooth Scroll Single Page </a></h3>
              <p>This wep app was designed to show a simple single page app with a smooth snap scroll on click. </p>
              <p>HTML | CSS | JS | JQ | Netlify </p>
          </div>              
        </div>

      </div>
      
    </section>
  );
}
export default Projects;