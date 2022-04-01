import styles from '../styles/About.module.css';
import Image from 'next/image'

const About = () => {
  return ( 
    <>
      <div className={styles.about}>
        <Image src='/me.jpg'  height={400} width={600} />
      <h2 >About me:</h2>
      <p>
          I'm a California native that migrated to Utah for school and stayed for a girl. I'm a husband, a father, a son and a friend. 
          <br />
          <br /> 
          Along with being a web developer, I am a Certified Strength and Conditioning Coach and Certified Athletic Trainer. Staying healthy and helping others be as healthy as they can be is a huge part of my life. I try and stay active whenever possible. One of the activies that I enjoy the most is playing flag football with my friends. I am the captain of a team that plays in a fun social league every fall and spring! 
          <br />
          <br />
          When i'm not coding, working or being active, you can find me hanging out at home spending time with my wife, son and our cat. We love to watch movies, build puzzles, read, play games, cook and listen to music.
      </p>
      </div>
    
    </>
    
   );
}
 
export default About;