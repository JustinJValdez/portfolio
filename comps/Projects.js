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
          
          <h4><a href='https://www.fringecosmetology.com/'>Fringe Cosmetology Consulting</a></h4>
            <p>I designed and built this responsive website for a small business that focuses on helping professionals in the beatuty field improve their skill sets via training and workshops.  </p>
            <p>HTML | CSS | JS | Bootstrap | Netlify</p>
          </div>
        </div>

        <div className={styles.work}>
          
          <Image src='/DD.png' width={425} height={275} alt='Devils details website image' />
          <div className={styles.text}>
          <h4><a href='https://www.devilsdetailsgb.com/'>Devil's Details</a></h4> 
            <p>I designed and built this responsive website for a small business that focuses an auto detailer that wanted to showcase his work, his background and a way for potential customers to connect with him. </p>
            <p>HTML | CSS | JS | Bootstrap | Netlify</p>
          </div>                  
        </div>

        <div className={styles.work}>
          <Image src='/counter.png' width={425} height={275} alt='counter website image'  />
          <div className={styles.text}>
          <h4><a href="https://basicjscounter.netlify.app/">Click Counter</a></h4> 
          <p>This web app was designed as a simple click and count tracker.</p>
          <p>HTML | CSS | JS</p>
          </div>       
        </div>

        <div className={styles.work}>
          <Image src='/Landing.png' width={425} height={275} alt='Card generator website image' />
          <div className={styles.text}>
          <h4><a href="http://">Random Playing Card Generator</a></h4> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto dolorum culpa provident soluta praesentium, accusantium aperiam fugit id sunt fugiat voluptates esse magnam aliquid harum. Dolorum totam quidem ab.</p>
          <p>HTML | CSS | JS</p>
          </div>
        </div>

        <div className={styles.work}>
          <Image src='/Bday.png' width={425} height={275} alt='Custom e-vite website image' />
          <div className={styles.text}>
          <h4> <a href="https://zandersbirthday.netlify.app/">Evite site</a></h4> 
          <p>This website was designed as an e-vite for my son's first birthday party. It allowed invited guests to RSVP with a total count for their party.</p>
          <p>HTML | CSS | JS</p>
          </div>      
        </div>

        <div className={styles.work}>
          <Image src='/DD.png' width={425} height={275} alt='Home page of this website image' />
          <div className={styles.text}>
              <h4>This Portfolio</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod nihil facilis optio vitae quaerat totam quae nobis praesentium sapiente. Ex consectetur velit perspiciatis placeat nemo architecto voluptate aperiam? Eaque?</p>
              <p>HTML | CSS | JS | Next.js | Netlify </p>
          </div>              
        </div>

      </div>
      
    </section>
  );
}
export default Projects;