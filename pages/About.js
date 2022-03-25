import styles from '../styles/About.module.css';
import Image from 'next/image'

const About = () => {
  return ( 
    <>
      <div className={styles.about}>
        <Image src='/me.jpg'  height={400} width={600} />
      <h1 >About me:</h1>
      <p>
          I am a California native that migrated to Utah for school and stayed for a girl. Above all else, my family and my friends are the most important things in this universe to me. My passion is to be the best me possible. I am a Certified Strength and Conditioning Coach as well as a Certified Athletic Trainer, so staying healthy and helping others be as healthy as they can be is a huge part of my life. I am the captain and quarterback of social league flag football team and I love going out and playing with my team!
          <br />
          <br />
      Movies, music and comics are a guilty pleasure of mine. My favorite read is the Dark Tower series from Stephen King, my two favorite bands are Y&T and Atreyu, my favorite comic books characters are Venom, Spiderman, Green Lantern and the Red Hood.
      </p>
      </div>
    
    </>
    
   );
}
 
export default About;